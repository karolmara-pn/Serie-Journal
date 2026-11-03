
import { useEffect, useState } from 'react';
import './SerieForm.css';

const formularioInicial = {
  titulo: '',
  temporadas: '',
  dataLancamento: '',
  diretor: '',
  produtora: '',
  categoria: '',
  dataAssistiu: ''
};

function SerieForm({ onSalvar, serieEmEdicao, onCancelar }) {
  const [formulario, setFormulario] = useState(formularioInicial);
  const [erros, setErros] = useState({});

  useEffect(() => {
    if (serieEmEdicao) {
      setFormulario({
        titulo: serieEmEdicao.titulo || '',
        temporadas: serieEmEdicao.temporadas || '',
        dataLancamento: serieEmEdicao.dataLancamento || '',
        diretor: serieEmEdicao.diretor || '',
        produtora: serieEmEdicao.produtora || '',
        categoria: serieEmEdicao.categoria || '',
        dataAssistiu: serieEmEdicao.dataAssistiu || ''
      });
    } else {
      setFormulario(formularioInicial);
    }

    setErros({});
  }, [serieEmEdicao]);

  function atualizarCampo(event) {
    const { name, value } = event.target;

    setFormulario((dadosAnteriores) => ({
      ...dadosAnteriores,
      [name]: value
    }));

    setErros((errosAnteriores) => ({
      ...errosAnteriores,
      [name]: ''
    }));
  }

  function validarFormulario() {
    const novosErros = {};

    if (!formulario.titulo.trim()) {
      novosErros.titulo = 'Informe o título da série.';
    }

    if (
      !formulario.temporadas ||
      Number(formulario.temporadas) < 1
    ) {
      novosErros.temporadas = 'Informe pelo menos 1 temporada.';
    }

    if (!formulario.dataLancamento) {
      novosErros.dataLancamento = 'Informe a data de lançamento.';
    }

    if (!formulario.diretor.trim()) {
      novosErros.diretor = 'Informe o diretor.';
    }

    if (!formulario.produtora.trim()) {
      novosErros.produtora = 'Informe a produtora.';
    }

    if (!formulario.categoria) {
      novosErros.categoria = 'Selecione uma categoria.';
    }

    if (!formulario.dataAssistiu) {
      novosErros.dataAssistiu = 'Informe quando assistiu.';
    }

    if (
      formulario.dataLancamento &&
      formulario.dataAssistiu &&
      formulario.dataAssistiu < formulario.dataLancamento
    ) {
      novosErros.dataAssistiu =
        'A data em que assistiu não pode ser anterior ao lançamento.';
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  function enviarFormulario(event) {
    event.preventDefault();

    if (validarFormulario()) {
      onSalvar({
        ...formulario,
        temporadas: Number(formulario.temporadas)
      });

      setFormulario(formularioInicial);
      setErros({});
    }
  }

  return (
    <form className="serie-form" onSubmit={enviarFormulario} noValidate>
      <div className="form-grid">
        <div className="form-group full-width">
          <label htmlFor="titulo">Título da série *</label>
          <input
            id="titulo"
            name="titulo"
            type="text"
            placeholder="Ex.: How I Met Your Mother"
            value={formulario.titulo}
            onChange={atualizarCampo}
            className={erros.titulo ? 'input-error' : ''}
          />
          {erros.titulo && <span className="error-message">{erros.titulo}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="temporadas">Número de temporadas *</label>
          <input
            id="temporadas"
            name="temporadas"
            type="number"
            min="1"
            placeholder="Ex.: 4"
            value={formulario.temporadas}
            onChange={atualizarCampo}
            className={erros.temporadas ? 'input-error' : ''}
          />
          {erros.temporadas && <span className="error-message">{erros.temporadas}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="dataLancamento">Data de lançamento da temporada *</label>
          <input
            id="dataLancamento"
            name="dataLancamento"
            type="date"
            value={formulario.dataLancamento}
            onChange={atualizarCampo}
            className={erros.dataLancamento ? 'input-error' : ''}
          />
          {erros.dataLancamento && <span className="error-message">{erros.dataLancamento}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="diretor">Diretor *</label>
          <input
            id="diretor"
            name="diretor"
            type="text"
            placeholder="Nome do diretor"
            value={formulario.diretor}
            onChange={atualizarCampo}
            className={erros.diretor ? 'input-error' : ''}
          />
          {erros.diretor && <span className="error-message">{erros.diretor}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="produtora">Produtora *</label>
          <input
            id="produtora"
            name="produtora"
            type="text"
            placeholder="Nome da produtora"
            value={formulario.produtora}
            onChange={atualizarCampo}
            className={erros.produtora ? 'input-error' : ''}
          />
          {erros.produtora && <span className="error-message">{erros.produtora}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="categoria">Categoria *</label>
          <select
            id="categoria"
            name="categoria"
            value={formulario.categoria}
            onChange={atualizarCampo}
            className={erros.categoria ? 'input-error' : ''}
          >
            <option value="">Selecione uma categoria</option>
            <option value="Ação">Ação</option>
            <option value="Aventura">Aventura</option>
            <option value="Comédia">Comédia</option>
            <option value="Drama">Drama</option>
            <option value="Fantasia">Fantasia</option>
            <option value="Ficção científica">Ficção científica</option>
            <option value="Mistério">Mistério</option>
            <option value="Romance">Romance</option>
            <option value="Suspense">Suspense</option>
            <option value="Terror">Terror</option>
            <option value="Outro">Outro</option>
          </select>
          {erros.categoria && <span className="error-message">{erros.categoria}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="dataAssistiu">Data em que assistiu *</label>
          <input
            id="dataAssistiu"
            name="dataAssistiu"
            type="date"
            value={formulario.dataAssistiu}
            onChange={atualizarCampo}
            className={erros.dataAssistiu ? 'input-error' : ''}
          />
          {erros.dataAssistiu && <span className="error-message">{erros.dataAssistiu}</span>}
        </div>
      </div>

      <p className="form-note">* Campos obrigatórios.</p>

      <div className="form-actions">
        {serieEmEdicao && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancelar}
          >
            Cancelar
          </button>
        )}

        <button type="submit" className="btn btn-primary">
          {serieEmEdicao ? 'Salvar alterações' : 'Cadastrar série'}
        </button>
      </div>
    </form>
  );
}

export default SerieForm;
