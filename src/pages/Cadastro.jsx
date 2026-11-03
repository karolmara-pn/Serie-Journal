
import SerieForm from '../components/SerieForm/SerieForm';

function Cadastro({ onSalvar, serieEmEdicao, onCancelar }) {
  return (
    <section className="content-page">
      <span className="eyebrow">SUA COLEÇÃO</span>

      <h1>
        {serieEmEdicao ? 'Editar série' : 'Cadastrar série'}
      </h1>

      <p className="page-description">
        {serieEmEdicao
          ? 'Atualize as informações da sua série.'
          : 'Preencha as informações abaixo para adicionar uma série à sua coleção.'}
      </p>

      <SerieForm
        onSalvar={onSalvar}
        serieEmEdicao={serieEmEdicao}
        onCancelar={onCancelar}
      />
    </section>
  );
}

export default Cadastro;
