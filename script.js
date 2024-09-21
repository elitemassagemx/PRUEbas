// Configuración global
const CONFIG = {
    BASE_URL: "https://raw.githubusercontent.com/elitemassagemx/Home/main/ICONOS/",
    ITEMS_PER_PAGE: 3,
    WHATSAPP_NUMBER: "5215640020305",
    DATA_URL: "https://raw.githubusercontent.com/elitemassagemx/PRUEbas/main/data.json"
};

// Estado global de la aplicación
const state = {
    currentPage: 1,
    currentCategory: 'individual',
    totalPages: 1,
    language: 'es',
    services: null,
    packages: null
};

// Módulo de Utilidades
const Utils = {
    // Crea un elemento HTML con clase y contenido opcionales
    createElement: (tag, className, innerHTML) => {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (innerHTML) element.innerHTML = innerHTML;
        return element;
    },
    
    // Muestra una notificación temporal
    showNotification: (message) => {
        const toast = document.getElementById('toast');
        toast.querySelector('#desc').textContent = message;
        toast.className = 'show';
        setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 5000);
    }
};

// Módulo de Comunicación
const CommunicationModule = {
    // Envía un mensaje de WhatsApp predefinido
    sendWhatsAppMessage: (action, serviceTitle) => {
        const message = encodeURIComponent(`Hola! Quiero ${action} un ${serviceTitle}`);
        const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${message}`;
        window.open(url, '_blank');
    },

    // Configura el formulario de contacto
    setupContactForm: () => {
        const form = document.getElementById('contact-form');
        if (form) {
            form.innerHTML = `
                <h2>Contáctanos</h2>
                <input type="text" id="name" name="name" placeholder="Tu nombre" required>
                <input type="email" id="email" name="email" placeholder="Tu email" required>
                <textarea id="message" name="message" placeholder="Tu mensaje aquí" required></textarea>
                <button type="submit">Enviar</button>
            `;
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                // Aquí iría la lógica para enviar el formulario
                Utils.showNotification('Mensaje enviado con éxito');
                form.reset();
            });
        }
    }
};

// Módulo de Beneficios Destacados
const BeneficiosModule = {
    // Renderiza los beneficios destacados
    renderBeneficiosDestacados: () => {
        const beneficiosContainer = document.querySelector('.sugerencias-container');
        if (!beneficiosContainer) return;

        const beneficios = [
            { name: "Reducción de estrés", icon: "benefits-icon1.png" },
            { name: "Mejora circulación", icon: "ccirculacion.png" },
            { name: "Alivio dolor muscular", icon: "sqpierna.png" },
            { name: "Hidratación de la piel", icon: "chidratacion.png" },
            { name: "Mejora energía vital", icon: "benefits-icon3.png" }
        ];

        beneficiosContainer.innerHTML = '';
        beneficios.forEach(beneficio => {
            const beneficioElement = Utils.createElement('div', 'sugerencia-item');
            beneficioElement.innerHTML = `
                <img src="${CONFIG.BASE_URL}${beneficio.icon}" alt="${beneficio.name}" class="sugerencia-icon">
                <p>${beneficio.name}</p>
            `;
            beneficiosContainer.appendChild(beneficioElement);
        });
    }
};

// Módulo de Servicios
const ServicesModule = {
    // Renderiza los servicios en la página actual
    renderServices: () => {
        const servicesList = document.getElementById('services-list');
        if (!servicesList) return;
        servicesList.innerHTML = '';
        const currentServices = state.services[state.currentCategory] || [];
        const startIndex = (state.currentPage - 1) * CONFIG.ITEMS_PER_PAGE;
        const endIndex = startIndex + CONFIG.ITEMS_PER_PAGE;
        const servicesToRender = currentServices.slice(startIndex, endIndex);
        
        servicesToRender.forEach(service => {
            const serviceElement = ServicesModule.createServiceElement(service);
            servicesList.appendChild(serviceElement);
        });
        PaginationModule.updatePagination();
    },

    // Crea un elemento HTML para un servicio individual
    createServiceElement: (service) => {
        const serviceElement = Utils.createElement('div', 'service-item');
        serviceElement.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <div class="service-benefits">
                ${service.benefits.map((benefit, index) => `
                    <div class="service-benefit">
                        <img src="${service.benefitsIcons[index].replace('${BASE_URL}', CONFIG.BASE_URL)}" alt="${benefit}">
                        <span>${benefit}</span>
                    </div>
                `).join('')}
            </div>
            <p class="service-duration">${service.duration}</p>
            <div class="service-buttons">
                <button class="reserve-button">Reservar</button>
                <button class="info-button">Saber más</button>
            </div>
        `;

        serviceElement.querySelector('.reserve-button').addEventListener('click', () => CommunicationModule.sendWhatsAppMessage('Reservar', service.title));
        serviceElement.querySelector('.info-button').addEventListener('click', () => UIModule.showPopup(service));

        return serviceElement;
    },

    // Renderiza servicios desde datos crudos
    renderServicesFromData: (services) => {
        const servicesContainer = document.getElementById('services');
        if (servicesContainer) {
            Object.entries(services).forEach(([category, categoryServices]) => {
                if (category !== 'paquetes') {
                    categoryServices.forEach(service => {
                        const div = Utils.createElement('div');
                        div.textContent = `${service.title}: ${service.description}`;
                        servicesContainer.appendChild(div);
                    });
                }
            });
        }
    },

    // Método para inicializar el módulo
    init: () => {
        const categorySelector = document.querySelector('.category-selector');
        if (categorySelector) {
            categorySelector.addEventListener('click', (e) => {
                if (e.target.classList.contains('choice-chip')) {
                    state.currentCategory = e.target.dataset.category;
                    state.currentPage = 1;
                    document.querySelectorAll('.choice-chip').forEach(chip => chip.classList.remove('active'));
                    e.target.classList.add('active');
                    ServicesModule.renderServices();
                }
            });
        }
    }
};

// Módulo de Paquetes
const PackagesModule = {
    // Renderiza los paquetes
    renderPackages: () => {
        const packageList = document.getElementById('package-list');
        if (!packageList) return;
        packageList.innerHTML = '';
        state.packages.forEach(pkg => {
            const packageElement = PackagesModule.createPackageElement(pkg);
            packageList.appendChild(packageElement);
        });
    },

    // Crea un elemento HTML para un paquete individual
    createPackageElement: (pkg) => {
        const packageElement = Utils.createElement('div', 'package-item');
        packageElement.innerHTML = `
            <h3>${pkg.title}</h3>
            <p>${pkg.description}</p>
            <div class="package-includes">
                <h4>Incluye:</h4>
                <ul>
                    ${pkg.includes.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            <div class="package-benefits">
                ${pkg.benefits.map((benefit, index) => `
                    <div class="package-benefit">
                        <img src="${pkg.benefitsIcons[index].replace('${BASE_URL}', CONFIG.BASE_URL)}" alt="${benefit}">
                        <span>${benefit}</span>
                    </div>
                `).join('')}
            </div>
            <p class="package-duration">${pkg.duration}</p>
            <div class="package-buttons">
                <button class="reserve-button">Reservar</button>
                <button class="info-button">Saber más</button>
            </div>
        `;

        packageElement.querySelector('.reserve-button').addEventListener('click', () => CommunicationModule.sendWhatsAppMessage('Reservar', pkg.title));
        packageElement.querySelector('.info-button').addEventListener('click', () => UIModule.showPopup(pkg));

        return packageElement;
    },

    // Renderiza paquetes desde datos crudos
    renderPackagesFromData: (packages) => {
        const packagesContainer = document.getElementById('packages');
        const packageBenefitsContainer = document.getElementById('package-benefits');
        
        if (packagesContainer && packageBenefitsContainer) {
            packages.forEach(pkg => {
                const div = Utils.createElement('div');
                div.textContent = pkg.title;
                packagesContainer.appendChild(div);

                pkg.benefits.forEach(benefit => {
                    const benefitDiv = Utils.createElement('div');
                    benefitDiv.textContent = benefit;
                    packageBenefitsContainer.appendChild(benefitDiv);
                });
            });
        }
    },

    // Inicializa el módulo de paquetes
    init: () => {
        PackagesModule.renderPackages();
    }
};

// Módulo de UI
const UIModule = {
    // Muestra un popup con información detallada
    showPopup: (data) => {
        const popup = document.getElementById('popup');
        const popupTitle = document.getElementById('popup-title');
        const popupImage = document.getElementById('popup-image');
        const popupDescription = document.getElementById('popup-description');

        if (!popup || !popupTitle || !popupImage || !popupDescription) return;

        popupTitle.textContent = data.title;
        popupImage.src = data.image.replace('${BASE_URL}', CONFIG.BASE_URL);
        popupImage.alt = data.title;
        popupDescription.textContent = data.popupDescription || data.description;

        popup.style.display = 'flex';
        setTimeout(() => Utils.showNotification('¿Te interesa este servicio? ¡Contáctanos!'), 4000);
    },

    // Crea el efecto de persianas venecianas
    createVenetianBlinds: () => {
        const venetianContainer = document.getElementById('venetian-container');
        if (!venetianContainer) return;
        const image = `${CONFIG.BASE_URL}copas.JPG`;
        
        for (let i = 0; i < 10; i++) {
            const blind = Utils.createElement('div', 'blind');
            blind.style.backgroundImage = `url(${image})`;
            blind.style.left = `${i * 10}%`;
            
            blind.addEventListener('mouseover', () => {
                blind.style.transform = 'scaleY(1.1)';
            });
            
            blind.addEventListener('mouseout', () => {
                blind.style.transform = 'scaleY(1)';
            });
            
            venetianContainer.appendChild(blind);
        }
    },

    // Crea los checkboxes para las experiencias
    createExperienceCheckboxes: () => {
        const checkboxGroup = document.querySelector('.checkbox-group');
        if (!checkboxGroup) return;
        const experiences = [
            { name: 'Masaje Relajante', icon: 'massage' },
            { name: 'Aromaterapia', icon: 'spa' },
            { name: 'Piedras Calientes', icon: 'hot-tub' },
            { name: 'Reflexología', icon: 'foot' },
            { name: 'Facial', icon: 'face' }
        ];

        experiences.forEach(exp => {
            const checkbox = Utils.createElement('div', 'checkbox');
            checkbox.innerHTML = `
                <input type="checkbox" id="${exp.name}" class="checkbox-input">
                <label for="${exp.name}" class="checkbox-tile">
                    <span class="checkbox-icon">
                        <i class="fas fa-${exp.icon}"></i>
                    </span>
                    <span class="checkbox-label">${exp.name}</span>
                </label>
            `;
            checkboxGroup.appendChild(checkbox);
        });
    },

    // Configura el acordeón del menú
    setupAccordion: () => {
        const header = document.querySelector('#sticky-header .container');
        if (!header) return;
        const accordionToggle = Utils.createElement('button', 'accordion-button', 'Menú <i class="fas fa-chevron-down"></i>');
        accordionToggle.id = 'accordion-toggle';
        
        const accordionContent = Utils.createElement('div', 'accordion-content');
        accordionContent.id = 'accordion-content';
        const mainNav = document.querySelector('.main-nav');
        if (mainNav) {
            accordionContent.innerHTML = mainNav.innerHTML;
        }

        header.appendChild(accordionToggle);
        header.appendChild(accordionContent);

        accordionToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
        });
    },

    // Inicializa la galería
    initializeGallery: () => {
        const galleryItems = document.querySelectorAll('.gallery-grid img');
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                UIModule.showPopup({
                    title: item.alt,
                    image: item.src,
                    description: 'Descripción de la imagen de la galería'
                });
            });
        });
    },

    // Configura el título de beneficios
    setupBenefitsTitle: () => {
        const benefitsContainer = document.getElementById('benefits');
        if (benefitsContainer) {
            benefitsContainer.textContent = 'Beneficios destacados';
        }
    },

    // Configura el mensaje de bienvenida
    setupWelcomeMessage: () => {
        const welcomeContainer = document.getElementById('welcome');
        if (welcomeContainer) {
            welcomeContainer.textContent = 'Bienvenido a tu oasis';
        }
    },

    // Configura las persianas venecianas
    setupVenetianBlind: () => {
        const venetianContainer = document.getElementById('venetian');
        if (venetianContainer) {
            const venetianDiv = Utils.createElement('div');
venetianDiv.textContent = 'Venetian';
            venetianContainer.appendChild(venetianDiv);
        }
    },

    // Inicializa el módulo UI
    init: () => {
        UIModule.createVenetianBlinds();
        UIModule.createExperienceCheckboxes();
        UIModule.setupAccordion();
        UIModule.initializeGallery();
        UIModule.setupBenefitsTitle();
        UIModule.setupWelcomeMessage();
        UIModule.setupVenetianBlind();
        const closeButton = document.querySelector('.close');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                const popup = document.getElementById('popup');
                if (popup) popup.style.display = 'none';
            });
        }
    }
};

// Módulo de Paginación
const PaginationModule = {
    // Actualiza los indicadores de paginación
    updatePagination: () => {
        const paginationContainer = document.querySelector('.pagination-container');
        if (!paginationContainer) return;
        paginationContainer.innerHTML = '';
        const currentServices = state.services[state.currentCategory] || [];
        state.totalPages = Math.ceil(currentServices.length / CONFIG.ITEMS_PER_PAGE);

        for (let i = 1; i <= state.totalPages; i++) {
            const dot = Utils.createElement('div', `little-dot${i === state.currentPage ? ' active' : ''}`);
            paginationContainer.appendChild(dot);
        }
    },

    // Cambia la página actual
    changePage: (direction) => {
        state.currentPage += direction;
        if (state.currentPage < 1) state.currentPage = state.totalPages;
        if (state.currentPage > state.totalPages) state.currentPage = 1;
        ServicesModule.renderServices();
    },

    // Inicializa el módulo de paginación
    init: () => {
        const prevButton = document.querySelector('.btn--prev');
        const nextButton = document.querySelector('.btn--next');
        if (prevButton) prevButton.addEventListener('click', () => PaginationModule.changePage(-1));
        if (nextButton) nextButton.addEventListener('click', () => PaginationModule.changePage(1));
    }
};

// Módulo de Internacionalización
const I18nModule = {
    // Inicializa el selector de idioma
    initLanguageSelector: () => {
        const translateIcon = document.getElementById('translate-icon');
        const languageOptions = document.querySelector('.language-options');

        if (translateIcon && languageOptions) {
            translateIcon.addEventListener('click', () => {
                languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
            });

            document.querySelectorAll('.lang-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    const lang = e.currentTarget.dataset.lang;
                    I18nModule.changeLanguage(lang);
                    languageOptions.style.display = 'none';
                });
            });
        }
    },

    // Cambia el idioma de la aplicación
    changeLanguage: async (lang) => {
        try {
            const response = await fetch(`/translations/${lang}.json`);
            const translations = await response.json();
            // Aplicar traducciones aquí
            state.language = lang;
            Utils.showNotification(`Idioma cambiado a ${lang}`);
        } catch (error) {
            console.error('Error al cambiar el idioma:', error);
            Utils.showNotification('Error al cambiar el idioma');
        }
    }
};

// Módulo de Testimonios
const TestimonialsModule = {
    // Configura el carrusel de testimonios
    setupTestimonialCarousel: () => {
        const testimonials = [
            { name: "Cliente 1", text: "Excelente servicio, muy relajante." },
            { name: "Cliente 2", text: "Los masajes son increíbles, volveré pronto." },
            { name: "Cliente 3", text: "Una experiencia única y rejuvenecedora." }
        ];

        const carouselContainer = document.getElementById('card-slider');
        if (!carouselContainer) return;
        
        testimonials.forEach((testimonial, index) => {
            const testimonialElement = Utils.createElement('div', 'slider-item');
            testimonialElement.innerHTML = `
                <div class="animation-card_image">
                    <img src="${CONFIG.BASE_URL}user-avatar.jpg" alt="${testimonial.name}">
                </div>
                <div class="animation-card_content">
                    <h3 class="animation-card_content_title">${testimonial.name}</h3>
                    <p class="animation-card_content_description">${testimonial.text}</p>
                </div>
            `;
            carouselContainer.appendChild(testimonialElement);
        });

        TestimonialsModule.startTestimonialAnimation();
    },

    // Inicia la animación del carrusel de testimonios
    startTestimonialAnimation: () => {
        const cards = document.querySelectorAll('#card-slider .slider-item');
        if (cards.length < 4) {
            console.error('Se necesitan al menos 4 testimonios para la animación');
            return;
        }
        
        let currentIndex = 0;
        setInterval(() => {
            cards[currentIndex].style.opacity = '0';
            currentIndex = (currentIndex + 1) % cards.length;
            cards[currentIndex].style.opacity = '1';
        }, 3000);
    }
};

// Función para manejar el efecto de galería
function styles(item_id, x, y, z, opacity, shadow) {
    const item = document.querySelector(item_id);
    if (item) {
        item.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        item.style.opacity = opacity;
        item.style.boxShadow = shadow;
    }
}

// Función de inicialización principal
function init(data) {
    try {
        state.services = data.services || {};
        state.packages = data.services.paquetes || [];
        state.currentCategory = Object.keys(state.services)[0] || 'individual';
        
        BeneficiosModule.renderBeneficiosDestacados();
        ServicesModule.init();
        ServicesModule.renderServices();
        PackagesModule.init();
        UIModule.init();
        PaginationModule.init();
        CommunicationModule.setupContactForm();
        I18nModule.initLanguageSelector();
        TestimonialsModule.setupTestimonialCarousel();

        // Renderizar servicios y paquetes desde datos crudos
        ServicesModule.renderServicesFromData(data.services);
        PackagesModule.renderPackagesFromData(data.services.paquetes);

        // Habilitar el contenedor sticky
        const stickyContainer = document.getElementById('sticky');
        if (stickyContainer) {
            stickyContainer.style.display = 'block';
        }

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    } catch (error) {
        console.error('Error durante la inicialización:', error);
        Utils.showNotification('Hubo un problema al inicializar la aplicación. Por favor, recarga la página.');
    }
}

// Event listener para DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    fetch(CONFIG.DATA_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (!data || !data.services) {
                throw new Error('Datos inválidos recibidos del servidor');
            }
            init(data);
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
            Utils.showNotification('Error al cargar los datos. Por favor, intenta de nuevo más tarde.');
        });
});

// Configuración del menú acordeón
var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    var links = this.el.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('click', e => this.dropdown(e));
    });
}

Accordion.prototype.dropdown = function(e) {
    var $this = e.target;
    var $next = $this.nextElementSibling;
    $next.style.display = $next.style.display === 'block' ? 'none' : 'block';
    $this.parentNode.classList.toggle('open');
    if (!this.multiple) {
        var $el = this.el;
        var $submenu = $el.querySelectorAll('.submenu');
        $submenu.forEach(sub => {
            if (sub !== $next) {
                sub.style.display = 'none';
                sub.parentNode.classList.remove('open');
            }
        });
    }
}

// Inicializar el acordeón cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    var accordion = new Accordion(document.getElementById('accordion'), false);
});

// Event listeners para la galería
document.getElementById('one')?.addEventListener('click', function() {
    document.getElementById('one')?.classList.add('focus');
    document.getElementById('two')?.classList.remove('focus');
    document.getElementById('three')?.classList.remove('focus');
    styles('#first', 0, 0, 0, 1, '0 20px 50px rgba(0,34,45,0.5)');
    styles('#second', 70, -80, -50, 0.6, 'none');
    styles('#third', 110, 80, -60, 0.1, 'none');
});

document.getElementById('two')?.addEventListener('click', function() {
    document.getElementById('one')?.classList.remove('focus');
    document.getElementById('two')?.classList.add('focus');
    document.getElementById('three')?.classList.remove('focus');
    styles('#first', 110, 80, -60, 0.1, 'none');
    styles('#second', 0, 0, 0, 1, '0 20px 50px rgba(0,34,45,0.5)');
    styles('#third', 70, -80, -50, 0.6, 'none');
});

document.getElementById('three')?.addEventListener('click', function() {
    document.getElementById('one')?.classList.remove('focus');
    document.getElementById('two')?.classList.remove('focus');
    document.getElementById('three')?.classList.add('focus');
    styles('#first', 70, -80, -50, 0.6, 'none');
    styles('#second', 110, 80, -60, 0.1, 'none');
    styles('#third', 0, 0, 0, 1, '0 20px 50px rgba(0,34,45,0.5)');
});
