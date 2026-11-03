
import { Link } from 'react-router-dom';
import SerieList from '../components/SerieList/SerieList';

function Series({ series, onEditar, onExcluir }) {
  return (
    <section className="content-page">
      <div className="list-heading">
        <div>
          <span className="eyebrow">SUA COLEÇÃO</span>
          <h1>Minhas séries</h1>
          <p className="page-description">
            Todas as suas séries reunidas em um só lugar.
          </p>
        </div>

        <Link to="/cadastro" className="btn btn-primary">
          + Nova série
        </Link>
      </div>

      <SerieList
        series={series}
        onEditar={onEditar}
        onExcluir={onExcluir}
      />
    </section>
  );
}

export default Series;
