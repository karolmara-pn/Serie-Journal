
import { useState } from 'react';
import './SerieList.css';

function SerieList({ series, onEditar, onExcluir }) {
  const [busca, setBusca] = useState('');

  const seriesFiltradas = series.filter((serie) =>
    serie.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  function formatarData(data) {
    if (!data) return '-';

    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  }

  return (
    <section className="serie-list">
      <div className="search-container">
        <input
          type="search"
          placeholder="Pesquisar série pelo título..."
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
          aria-label="Pesquisar séries"
        />
        <span>{seriesFiltradas.length} série(s) encontrada(s)</span>
      </div>

      {seriesFiltradas.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">▤</span>

          <h2>
            {series.length === 0
              ? 'Sua coleção está vazia.'
              : 'Nenhuma série encontrada.'}
          </h2>

          <p>
            {series.length === 0
              ? 'Cadastre sua primeira série para começar sua coleção.'
              : 'Tente pesquisar usando outro título.'}
          </p>
        </div>
      ) : (
        <div className="series-grid">
          {seriesFiltradas.map((serie) => (
            <article className="series-card" key={serie.id}>
              <div className="series-card-top">
                <span className="series-category">{serie.categoria}</span>
                <span className="series-seasons">
                  {serie.temporadas} temporada(s)
                </span>
              </div>

              <h2>{serie.titulo}</h2>

              <div className="series-details">
                <p><strong>Diretor:</strong> {serie.diretor}</p>
                <p><strong>Produtora:</strong> {serie.produtora}</p>
                <p>
                  <strong>Lançamento:</strong>{' '}
                  {formatarData(serie.dataLancamento)}
                </p>
                <p>
                  <strong>Assistiu em:</strong>{' '}
                  {formatarData(serie.dataAssistiu)}
                </p>
              </div>

              <div className="series-actions">
                <button
                  type="button"
                  className="edit-button"
                  onClick={() => onEditar(serie)}
                >
                  Editar
                </button>

                <button
                  type="button"
                  className="delete-button"
                  onClick={() => onExcluir(serie.id)}
                >
                  Excluir
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default SerieList;
