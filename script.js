document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = "https://raw.githubusercontent.com/elitemassagemx/Home/main/ICONOS/";
    
    // Definición de servicios y paquetes
    const services = {
        individual: [
            {
                title: "Aromaterapia",
                description: "Elige de nuestra selección de aceites esenciales pensados en tu relajación.",
                benefits: ["Reduce estrés", "Mejora el ánimo", "Alivia tensiones"],
                duration: "60 min",
                icon: `${BASE_URL}cfragancia2.png`,
                image: `${BASE_URL}aroma.JPG`
            },
            // Añade más servicios individuales aquí
        ],
        pareja: [
            {
                title: "Aromaterapia para 2",
                description: "Disfruten juntos de un masaje relajante con aceites esenciales.",
                benefits: ["Reducción de estrés", "Mejora del estado de ánimo", "Conexión en pareja"],
                duration: "60 min",
                icon: `${BASE_URL}cfragancia2.png`,
                image: `${BASE_URL}aroma-pareja.JPG`
            },
            // Añade más servicios en pareja aquí
        ],
        paquetes: [
            {
                title: "Paquete Romance Total",
                description: "Una experiencia completa para parejas.",
                includes: ["Masaje en pareja", "Copa de vino", "Fresas con chocolate"],
                duration: "90 min",
                icon: `${BASE_URL}romance-icon.png`,
                image: `${BASE_URL}romance-package.JPG`
            },
            // Añade más paquetes aquí
        ]
    };

    // Función para renderizar servicios
    function renderServices(category) {
        const servicesList = document.getElementById('services-list');
        servicesList.innerHTML = '';
        services[category].forEach(service => {
            const serviceElement = document.createElement('div');
            serviceElement.className = 'service-item';
            serviceElement.innerHTML = `
                <img src="${service.icon}" alt="${service.title}" class="service-icon">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <ul>
                    ${service.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
                <p>Duración: ${service.duration}</p>
                <button class="btn-reserve">Reservar</button>
                <button class="btn-info">Más información</button>
            `;
            servicesList.appendChild(serviceElement);
        });
    }

    // Función para renderizar paquetes
    function renderPackages() {
        const packageList = document.getElementById('package-list');
        packageList.innerHTML = '';
        services.paquetes.forEach(pack => {
            const packageElement = document.createElement('div');
            packageElement.className = 'package-item';
            packageElement.innerHTML = `
                <img src="${pack.icon}" alt="${pack.title}" class="package-icon">
                <h3>${pack.title}</h3>
                <p>${pack.description}</p>
                <ul>
                    ${pack.includes.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <p>Duración: ${pack.duration}</p>
                <button class="btn-reserve">Reservar</button>
                <button class="btn-info">Más información</button>
            `;
            packageList.appendChild(packageElement);
        });
    }

    // Inicialización de servicios y paquetes
    renderServices('individual');
    renderPackages();

    // Manejo de categorías de servicios
    const categoryButtons = document.querySelectorAll('.choice-chip');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderServices(button.dataset.category);
        });
    });

    // Paginación
    let currentPage = 1;
    const itemsPerPage = 3;
    const totalPages = Math.ceil(services.individual.length / itemsPerPage);

    function updatePagination() {
        const paginationContainer = document.querySelector('.pagination-container');
        paginationContainer.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const dot = document.createElement('div');
            dot.className = `little-dot${i === currentPage ? ' active' : ''}`;
            paginationContainer.appendChild(dot);
        }
    }

    function changePage(direction) {
        currentPage += direction;
        if (currentPage < 1) currentPage = totalPages;
        if (currentPage > totalPages) currentPage = 1;
        renderServices(document.querySelector('.choice-chip.active').dataset.category);
        updatePagination();
    }

    document.querySelector('.btn--prev').addEventListener('click', () => changePage(-1));
    document.querySelector('.btn--next').addEventListener('click', () => changePage(1));

    // Acordeón
    const accordionItems = document.querySelectorAll('.accordion .link');
    accordionItems.forEach(item => {
        item.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.classList.toggle('open');
            const submenu = this.nextElementSibling;
            if (submenu.style.display === "block") {
                submenu.style.display = "none";
            } else {
                submenu.style.display = "block";
            }
        });
    });

    // Experiencias (Checkbox)
    const checkboxes = document.querySelectorAll('.checkbox-input');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const tile = this.nextElementSibling;
            if (this.checked) {
                tile.classList.add('checked');
            } else {
                tile.classList.remove('checked');
            }
        });
    });

    // Efecto Venetian Blinds
    function createVenetianBlinds() {
        const venetianContainer = document.querySelector('.venetian-blinds');
        const image1 = `${BASE_URL}venetian-image1.jpg`;
        const image2 = `${BASE_URL}venetian-image2.jpg`;
        
        for (let i = 0; i < 10; i++) {
            const blind = document.createElement('div');
            blind.className = 'blind';
            blind.style.backgroundImage = `url(${image1})`;
            blind.style.left = `${i * 10}%`;
            
            blind.addEventListener('mouseover', () => {
                blind.style.backgroundImage = `url(${image2})`;
            });
            
            blind.addEventListener('mouseout', () => {
                blind.style.backgroundImage = `url(${image1})`;
            });
            
            venetianContainer.appendChild(blind);
        }
    }

    createVenetianBlinds();

    // Galería
    const galleryItems = document.querySelectorAll('.gallery-item');
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const closePopup = document.querySelector('.close');

    galleryItems.forEach(item => {
        const icon = item.querySelector('.gallery-icon');
        icon.addEventListener('click', () => {
            const img = item.querySelector('img');
            popupImage.src = img.src;
            popupTitle.textContent = img.alt;
            popupDescription.textContent = "Descripción de la imagen..."; // Puedes personalizar esto
            popup.style.display = 'block';
        });
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Cierra el popup si se hace clic fuera de él
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Widget de traducción
    const translateIcon = document.getElementById('translate-icon');
    const languageOptions = document.querySelector('.language-options');

    translateIcon.addEventListener('click', () => {
        languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
    });

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const lang = e.currentTarget.dataset.lang;
            // Aquí puedes implementar la lógica de traducción
            console.log(`Cambiando idioma a: ${lang}`);
            languageOptions.style.display = 'none';
        });
    });

    // Botón de menú para dispositivos móviles
    const menuToggle = document.getElementById('menu-toggle');
    const accordion = document.getElementById('accordion');

    menuToggle.addEventListener('click', () => {
        accordion.classList.toggle('active');
    });

    // Función para enviar mensaje de WhatsApp
    function sendWhatsAppMessage(action, serviceTitle) {
        const message = encodeURIComponent(`Hola! Quiero ${action} un ${serviceTitle}`);
        const url = `https://wa.me/5215640020305?text=${message}`;
        window.open(url, '_blank');
    }

    // Agregar event listeners para los botones de reserva e información
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-reserve')) {
            const serviceTitle = e.target.closest('.service-item, .package-item').querySelector('h3').textContent;
            sendWhatsAppMessage('reservar', serviceTitle);
        } else if (e.target.classList.contains('btn-info')) {
            const serviceItem = e.target.closest('.service-item, .package-item');
            const serviceTitle = serviceItem.querySelector('h3').textContent;
            const serviceDescription = serviceItem.querySelector('p').textContent;
            popupTitle.textContent = serviceTitle;
            popupDescription.textContent = serviceDescription;
            popupImage.src = serviceItem.querySelector('img').src;
            popup.style.display = 'block';
        }
    });

    // Inicialización
    updatePagination();
});
