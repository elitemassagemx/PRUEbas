function createSugerenciasParaTi() {
  const sugerencias = [
    { nombre: 'Mary Aguilar', usuario: 'maryaguilar0', imagen: 'https://via.placeholder.com/100' },
    { nombre: 'Vanessa Villeg...', usuario: 'vanahi19', imagen: 'https://via.placeholder.com/100' },
  ];

  const container = document.createElement('div');
  container.className = 'sugerencias-container';
  
  const title = document.createElement('h2');
  title.textContent = 'Sugerencias para ti';
  container.appendChild(title);

  sugerencias.forEach(sugerencia => {
    const item = document.createElement('div');
    item.className = 'sugerencia-item';
    item.innerHTML = `
      <div class="sugerencia-info">
        <img src="${sugerencia.imagen}" alt="${sugerencia.nombre}" class="sugerencia-avatar">
        <div>
          <div class="sugerencia-nombre">${sugerencia.nombre}</div>
          <div class="sugerencia-usuario">${sugerencia.usuario}</div>
        </div>
      </div>
      <button class="sugerencia-seguir">Seguir</button>
    `;
    container.appendChild(item);
  });

  return container;
}

// Función para crear el componente ServiceCard
function createServiceCard(service) {
  const card = document.createElement('div');
  card.className = 'service-card';
  card.innerHTML = `
    <div class="service-card-content">
      <h3 class="service-card-title">${service.title}</h3>
      <p class="service-card-description">${service.description}</p>
    </div>
    <div class="service-card-benefits">
      <h4>Beneficios:</h4>
      <ul>
        ${service.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
      </ul>
    </div>
    <div class="service-card-duration">
      <p>Duración: ${service.duration}</p>
    </div>
    <div class="service-card-buttons">
      <button class="service-card-button service-card-button-reserve">Reservar</button>
      <button class="service-card-button service-card-button-info">Saber más</button>
    </div>
  `;
  return card;
}

// Función para crear el componente FixedBottomBar
function createFixedBottomBar() {
  const bar = document.createElement('div');
  bar.className = 'fixed-bottom-bar';
  bar.innerHTML = `
    <nav>
      <ul>
        <li>
          <a href="#">
            <span class="fixed-bottom-bar-icon">🏠</span>
            <span class="fixed-bottom-bar-text">Inicio</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="fixed-bottom-bar-icon">🔍</span>
            <span class="fixed-bottom-bar-text">Buscar</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="fixed-bottom-bar-icon">📅</span>
            <span class="fixed-bottom-bar-text">Reservas</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="fixed-bottom-bar-icon">👤</span>
            <span class="fixed-bottom-bar-text">Perfil</span>
          </a>
        </li>
      </ul>
    </nav>
  `;
  return bar;
}

// Función para inicializar la aplicación
function initApp() {
  const root = document.getElementById('app-root');
  if (!root) {
    console.error('No se encontró el elemento raíz con id "app-root"');
    return;
  }

  root.appendChild(createSugerenciasParaTi());
  
  const serviceCardData = {
    title: "Masaje Relajante",
    description: "Un masaje suave para aliviar el estrés y la tensión.",
    benefits: ["Reduce el estrés", "Mejora la circulación", "Alivia dolores musculares"],
    duration: "60 minutos"
  };
  root.appendChild(createServiceCard(serviceCardData));
  
  root.appendChild(createFixedBottomBar());
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);
