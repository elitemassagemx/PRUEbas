document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = "https://raw.githubusercontent.com/elitemassagemx/Home/main/ICONOS/";
    
    // Definición de servicios y paquetes (como en el código proporcionado)
    const services = {
        individual: [
            // ... (mantén los servicios individuales como estaban)
        ],
        pareja: [
            // ... (mantén los servicios en pareja como estaban)
        ],
        paquetes: [
            // ... (mantén los paquetes como estaban)
        ]
    };

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

        services[category].forEach(service => {
            const serviceElement = template.content.cloneNode(true);
            
            serviceElement.querySelector('.service-title').textContent = service.title;
            serviceElement.querySelector('.service-icon').src = service.icon;
            serviceElement.querySelector('.service-description').textContent = service.description;
            serviceElement.querySelector('.benefits-icon').src = Array.isArray(service.benefitsIcons) ? service.benefitsIcons[0] : service.benefitsIcons;
            serviceElement.querySelector('.service-benefits').textContent = service.benefits.join(', ');
            serviceElement.querySelector('.duration-icon').src = service.durationIcon;
            serviceElement.querySelector('.service-duration').textContent = service.duration;

            const reserveButton = serviceElement.querySelector('.reserve-button');
            reserveButton.addEventListener('click', () => sendWhatsAppMessage('Reservar', service.title));

            const infoButton = serviceElement.querySelector('.info-button');
            infoButton.addEventListener('click', () => showPopup(service));

            servicesList.appendChild(serviceElement);
        });
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

    function changeLanguage(lang) {
        // Implementa la lógica para cambiar el idioma
        console.log(`Cambiando idioma a: ${lang}`);
        // Aquí puedes agregar la lógica para actualizar el contenido según el idioma
        updateContent(lang);
    }

    // Manejo del selector de idioma
    const translateIcon = document.getElementById('translate-icon');
    const languageOptions = document.querySelector('.language-options');

    translateIcon.addEventListener('click', () => {
        languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
    });

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (event) => {
            const lang = event.currentTarget.dataset.lang;
            changeLanguage(lang);
            languageOptions.style.display = 'none';
        });
    });

    // Manejo de los chips de selección de categoría
    document.querySelectorAll('.choice-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.choice-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderServices(chip.dataset.category);
        });
    });

    // Manejo del popup
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close');

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Inicialización del acordeón
    $(function() {
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;
            var links = this.el.find('.link');
            links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
        }

        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el;
            var $this = $(this),
                $next = $this.next();
            $next.slideToggle();
            $this.parent().toggleClass('open');
            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            }
        }    

        var accordion = new Accordion($('#accordion'), false);
    });

    // Función para manejar la navegación suave
    function smoothScroll(target, duration) {
        var target = document.querySelector(target);
        var targetPosition = target.getBoundingClientRect().top;
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

    // Aplicar navegación suave a todos los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'), 1000);
        });
    });

    // Función para cambiar dinámicamente el contenido basado en el idioma
    function updateContent(lang) {
        // Aquí deberías tener un objeto con las traducciones
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

        // Actualizar el contenido
        document.querySelector('h1').textContent = translations[lang].title;
        document.querySelector('#inicio h2').textContent = translations[lang].welcome;
        // ... actualizar más elementos
    }

    // Función para manejar la carga lazy de imágenes
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const config = {
            rootMargin: '0px 0px 50px 0px',
            threshold: 0
        };

        let observer = new IntersectionObserver((entries, self) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    preloadImage(entry.target);
                    self.unobserve(entry.target);
                }
            });
        }, config);

        images.forEach(image => {
            observer.observe(image);
        });
    }

    function preloadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) { return; }
        img.src = src;
    }

    // Función para validar el formulario de contacto
    function validateForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Por favor, completa todos los campos.');
                return;
            }

            if (!isValidEmail(email)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                return;
            }

            // Aquí puedes agregar el código para enviar el formulario
            console.log('Formulario enviado', { name, email, message });
            form.reset();
        });
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Funciones auxiliares adicionales

    // Función para formatear precios
    function formatPrice(price) {
        return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price);
    }

    // Función para generar estrellas de calificación
    function generateRatingStars(rating) {
        const fullStar = '★';
        const emptyStar = '☆';
        const totalStars = 5;
        const fullStars = Math.floor(rating);
        let starsHTML = fullStar.repeat(fullStars) + emptyStar.repeat(totalStars - fullStars);
        return `<div class="rating">${starsHTML}</div>`;
    }

    // Inicialización
    function init() {
        renderServices('individual');
        renderPackages();
        lazyLoadImages();
        validateForm();

        // Manejar el scroll para efectos de parallax o animaciones
        window.addEventListener('scroll', () => {
            // Aquí puedes agregar efectos de scroll, como parallax o animaciones
        });

        // Evento de redimensionamiento de ventana
        window.addEventListener('resize', () => {
            // Aquí puedes manejar cambios en el diseño basados en el tamaño de la ventana
        });
    }

    // Llamada a la función de inicialización
    init();
});
