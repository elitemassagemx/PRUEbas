 // Paginación
    let currentPage = 1;
    const itemsPerPage = 3;
    let totalPages = Math.ceil(services.individual.length / itemsPerPage);

    function renderServices(category) {
        const servicesList = document.getElementById('services-list');
        if (!servicesList) {
            console.error('Element with id "services-list" not found');
            return;
        }
        servicesList.innerHTML = '';
        const template = document.getElementById('service-template');
        if (!template) {
            console.error('Element with id "service-template" not found');
            return;
        }

        services[category].forEach((service, index) => {
            if (index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage) {
                const serviceElement = template.content.cloneNode(true);
                
                serviceElement.querySelector('.service-title').textContent = service.title;
                serviceElement.querySelector('.service-icon').src = service.icon;
                serviceElement.querySelector('.service-description').textContent = service.description;
                serviceElement.querySelector('.benefits-icon').src = Array.isArray(service.benefitsIcon) ? service.benefitsIcon[0] : service.benefitsIcon;
                serviceElement.querySelector('.service-benefits').textContent = service.benefits.join(', ');
                serviceElement.querySelector('.duration-icon').src = service.durationIcon;
                serviceElement.querySelector('.service-duration').textContent = service.duration;

                const reserveButton = serviceElement.querySelector('.reserve-button');
                reserveButton.addEventListener('click', () => sendWhatsAppMessage('Reservar', service.title));

                const infoButton = serviceElement.querySelector('.info-button');
                infoButton.addEventListener('click', () => showPopup(service));

                servicesList.appendChild(serviceElement);
            }
        });

        updatePagination();
    }

    function renderPackages() {
        const packageList = document.getElementById('package-list');
        if (!packageList) {
            console.error('Element with id "package-list" not found');
            return;
        }
        packageList.innerHTML = '';
        services.paquetes.forEach(pkg => {
            const packageElement = document.createElement('div');
            packageElement.className = 'package-item';
            packageElement.innerHTML = `
                <h3>${pkg.title}</h3>
                <p>${pkg.description}</p>
                <p><strong>Incluye:</strong> ${pkg.includes.join(', ')}</p>
                <p><strong>Duración:</strong> ${pkg.duration}</p>
                <p><strong>Beneficios:</strong> ${pkg.benefits.join(', ')}</p>
                <button class="reserve-button">Reservar</button>
                <button class="info-button">Saber más</button>
            `;

            packageElement.querySelector('.reserve-button').addEventListener('click', () => sendWhatsAppMessage('Reservar', pkg.title));
            packageElement.querySelector('.info-button').addEventListener('click', () => showPopup(pkg));

            packageList.appendChild(packageElement);
        });
    }

    function showPopup(data) {
        const popup = document.getElementById('popup');
        const popupTitle = document.getElementById('popup-title');
        const popupImage = document.getElementById('popup-image');
        const popupDescription = document.getElementById('popup-description');

        popupTitle.textContent = data.title || '';
        popupImage.src = data.popupImage || data.image || '';
        popupImage.alt = data.title || '';
        popupDescription.textContent = data.popupDescription || data.description || '';

        popup.style.display = 'block';
    }

    function sendWhatsAppMessage(action, serviceTitle) {
        const message = encodeURIComponent(`Hola! Quiero ${action} un ${serviceTitle}`);
        const url = `https://wa.me/5215640020305?text=${message}`;
        window.open(url, '_blank');
    }

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
        const activeCategory = document.querySelector('.choice-chip.active').dataset.category;
        renderServices(activeCategory);
    }

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
            changeLanguage(lang);
            languageOptions.style.display = 'none';
        });
    });

    function changeLanguage(lang) {
        console.log(`Cambiando idioma a: ${lang}`);
        updateContent(lang);
    }

    function updateContent(lang) {
        const translations = {
            es: {
                title: "Elite Massage",
                welcome: "Bienvenido a tu Oasis de Tranquilidad",
                // ... más traducciones
            },
            en: {
                title: "Elite Massage",
                welcome: "Welcome to your Oasis of Tranquility",
                // ... más traducciones
            },
            // ... otros idiomas
        };

        document.querySelector('h1').textContent = translations[lang].title;
        document.querySelector('#inicio h2').textContent = translations[lang].welcome;
        // ... actualizar más elementos
    }

    // Botón de menú para dispositivos móviles
    const menuToggle = document.getElementById('menu-toggle');
    const accordion = document.getElementById('accordion');

    menuToggle.addEventListener('click', () => {
        accordion.classList.toggle('active');
    });

    // Smooth Scroll
    function smoothScroll(target, duration) {
        var targetElement = document.querySelector(target);
        var targetPosition = targetElement.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'), 1000);
        });
    });

    // Event Listeners
    document.querySelector('.btn--prev').addEventListener('click', () => changePage(-1));
    document.querySelector('.btn--next').addEventListener('click', () => changePage(1));

    document.querySelectorAll('.choice-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.choice-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderServices(chip.dataset.category);
        });
    });

    // Inicialización
    function init() {
        renderServices('individual');
        renderPackages();
        createVenetianBlinds();
        updatePagination();
    }

    // Llamada a la función de inicialización
    init();
});
