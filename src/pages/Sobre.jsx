
function Sobre() {
  return (
    <section className="content-page">
      <span className="eyebrow">CONHEÇA O PROJETO</span>

      <h1>Sobre o Serie Journal</h1>

      <p className="page-description">
        O Serie Journal é uma aplicação desenvolvida para ajudar
        os usuários a registrar, organizar e acompanhar suas
        séries favoritas em um só lugar.
      </p>

      <div className="about-grid">
        <article className="about-card">
          <span className="about-number">01</span>
          <h2>Organização</h2>
          <p>
            Mantenha as informações das suas séries reunidas
            em uma lista organizada.
          </p>
        </article>

        <article className="about-card">
          <span className="about-number">02</span>
          <h2>Praticidade</h2>
          <p>
            Cadastre, pesquise, edite e exclua registros
            de maneira simples.
          </p>
        </article>

        <article className="about-card">
          <span className="about-number">03</span>
          <h2>Acompanhamento</h2>
          <p>
            Registre temporadas, datas e informações
            sobre suas experiências.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Sobre;
