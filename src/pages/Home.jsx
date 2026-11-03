
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home-page">
      <div className="home-content">
        <span className="eyebrow">SEU UNIVERSO DE SÉRIES</span>

        <h1>
          Suas histórias favoritas,
          <span> sempre organizadas.</span>
        </h1>

        <p>
          Registre as séries que você acompanha, organize suas
          temporadas e mantenha suas experiências sempre à mão.
        </p>

        <div className="home-actions">
          <Link to="/cadastro" className="btn btn-primary">
            Cadastrar uma série
          </Link>

          <Link to="/series" className="btn btn-secondary">
            Ver minhas séries
          </Link>
        </div>

        <div className="home-features">
          <div>
            <strong>01</strong>
            <span>Cadastre suas séries</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Organize suas informações</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Registre o que assistiu</span>
          </div>
        </div>
      </div>

      <div className="home-decoration">
        <div className="decoration-card">
          <span className="decoration-symbol">▶</span>
          <span className="decoration-label">SUA PRÓXIMA HISTÓRIA</span>
          <strong>Começa aqui.</strong>
          <div className="decoration-line"></div>
          <span className="decoration-small">Uma coleção feita por você.</span>
        </div>
      </div>
    </section>
  );
}

export default Home;
