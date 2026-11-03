
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Cadastro from './pages/Cadastro';
import Series from './pages/Series';

import './App.css';

// Séries iniciais do projeto
const seriesIniciais = [
  {
    id: 'serie-inicial-himym',
    titulo: 'How I Met Your Mother',
    temporadas: 9,
    dataLancamento: '2005-09-19',
    diretor: 'Pamela Fryman',
    produtora: '20th Television',
    categoria: 'Comédia',
    dataAssistiu: '2026-11-02'
  },
  {
    id: 'serie-inicial-prison-break',
    titulo: 'Prison Break',
    temporadas: 5,
    dataLancamento: '2005-08-29',
    diretor: 'Bobby Roth',
    produtora: 'Adelstein-Parouse Productions',
    categoria: 'Ação',
    dataAssistiu: '2026-11-02'
  },
  {
    id: 'serie-inicial-dark',
    titulo: 'Dark',
    temporadas: 3,
    dataLancamento: '2017-12-01',
    diretor: 'Baran bo Odar',
    produtora: 'Wiedemann & Berg Television',
    categoria: 'Ficção científica',
    dataAssistiu: '2026-11-02'
  }
];

// Recupera os dados salvos e acrescenta as séries iniciais
function carregarSeries() {
  const dadosSalvos = localStorage.getItem('serieJournal');

  if (!dadosSalvos) {
    return seriesIniciais;
  }

  try {
    const seriesSalvas = JSON.parse(dadosSalvos);

    if (!Array.isArray(seriesSalvas)) {
      return seriesIniciais;
    }

    const titulosSalvos = new Set(
      seriesSalvas.map((serie) =>
        serie.titulo.trim().toLowerCase()
      )
    );

    const seriesFaltantes = seriesIniciais.filter(
      (serie) =>
        !titulosSalvos.has(serie.titulo.toLowerCase())
    );

    return [...seriesSalvas, ...seriesFaltantes];
  } catch {
    return seriesIniciais;
  }
}

function App() {
  const [series, setSeries] = useState(carregarSeries);

  const [serieEmEdicao, setSerieEmEdicao] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('serieJournal', JSON.stringify(series));
  }, [series]);

  function salvarSerie(dados) {
    if (serieEmEdicao) {
      setSeries((listaAtual) =>
        listaAtual.map((serie) =>
          serie.id === serieEmEdicao.id
            ? { ...dados, id: serieEmEdicao.id }
            : serie
        )
      );
    } else {
      const novaSerie = {
        ...dados,
        id: Date.now()
      };

      setSeries((listaAtual) => [...listaAtual, novaSerie]);
    }

    setSerieEmEdicao(null);
    navigate('/series');
  }

  function editarSerie(serie) {
    setSerieEmEdicao(serie);
    navigate('/cadastro');
  }

  function excluirSerie(id) {
    const confirmar = window.confirm(
      'Tem certeza de que deseja excluir esta série?'
    );

    if (confirmar) {
      setSeries((listaAtual) =>
        listaAtual.filter((serie) => serie.id !== id)
      );
    }
  }

  function cancelarEdicao() {
    setSerieEmEdicao(null);
    navigate('/series');
  }

  return (
    <div className="app">
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/sobre" element={<Sobre />} />

          <Route
            path="/cadastro"
            element={
              <Cadastro
                onSalvar={salvarSerie}
                serieEmEdicao={serieEmEdicao}
                onCancelar={cancelarEdicao}
              />
            }
          />

          <Route
            path="/series"
            element={
              <Series
                series={series}
                onEditar={editarSerie}
                onExcluir={excluirSerie}
              />
            }
          />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>
          Serie Journal © 2026 - Organize suas séries favoritas.
        </p>
      </footer>
    </div>
  );
}

export default App;
