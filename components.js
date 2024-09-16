// SugerenciasParaTi component
const SugerenciasParaTi = () => {
  const sugerencias = [
    { nombre: 'Mary Aguilar', usuario: 'maryaguilar0', imagen: 'https://via.placeholder.com/100' },
    { nombre: 'Vanessa Villeg...', usuario: 'vanahi19', imagen: 'https://via.placeholder.com/100' },
  ];

  return (
    <div className=".sugerencias-container">
      <h2>Sugerencias para ti</h2>
      {sugerencias.map((sugerencia, index) => (
        <div key={index} className="sugerencia-item">
          <div className="sugerencia-info">
            <img src={sugerencia.imagen} alt={sugerencia.nombre} className="sugerencia-avatar" />
            <div>
              <div className="sugerencia-nombre">{sugerencia.nombre}</div>
              <div className="sugerencia-usuario">{sugerencia.usuario}</div>
            </div>
          </div>
          <button className="sugerencia-seguir">Seguir</button>
        </div>
      ))}
    </div>
  );
};

// ServiceCard component
const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-card-content">
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-description">{service.description}</p>
      </div>
      <div className="service-card-benefits">
        <h4>Beneficios:</h4>
        <ul>
          {service.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      <div className="service-card-duration">
        <p>Duración: {service.duration}</p>
      </div>
      <div className="service-card-buttons">
        <button className="service-card-button service-card-button-reserve">Reservar</button>
        <button className="service-card-button service-card-button-info">Saber más</button>
      </div>
    </div>
  );
};

// FixedBottomBar component
const FixedBottomBar = () => {
  return (
    <div className="fixed-bottom-bar">
      <nav>
        <ul>
          <li>
            <a href="#">
              <span className="fixed-bottom-bar-icon">🏠</span>
              <span className="fixed-bottom-bar-text">Inicio</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fixed-bottom-bar-icon">🔍</span>
              <span className="fixed-bottom-bar-text">Buscar</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fixed-bottom-bar-icon">📅</span>
              <span className="fixed-bottom-bar-text">Reservas</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fixed-bottom-bar-icon">👤</span>
              <span className="fixed-bottom-bar-text">Perfil</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// Render all components
ReactDOM.render(
  <React.Fragment>
    <SugerenciasParaTi />
    <ServiceCard 
      service={{
        title: "Masaje Relajante",
        description: "Un masaje suave para aliviar el estrés y la tensión.",
        benefits: ["Reduce el estrés", "Mejora la circulación", "Alivia dolores musculares"],
        duration: "60 minutos"
      }}
    />
    <FixedBottomBar />
  </React.Fragment>,
  document.getElementById('react-root')
);
