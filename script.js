// EliteMassage - Código JavaScript integrado

const EliteMassage = {
    config: {
        BASE_URL: "https://raw.githubusercontent.com/elitemassagemx/Home/main/ICONOS/",
        ITEMS_PER_PAGE: 3,
        WHATSAPP_NUMBER: "5215640020305"
    },
    state: {
        currentPage: 1,
        currentCategory: 'individual',
        totalPages: 1,
        language: 'es',
        services: null,
        packages: null
    },
    modules: {},
    components: {}
};

// Módulos
EliteMassage.modules.Utils = {
    createElement: (tag, className, innerHTML) => {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (innerHTML) element.innerHTML = innerHTML;
        return element;
    },
    
    showNotification: (message) => {
        const toast = document.getElementById('toast');
        toast.querySelector('#desc').textContent = message;
        toast.className = 'show';
        setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 5000);
    }
};

EliteMassage.modules.CommunicationModule = {
    sendWhatsAppMessage: (action, serviceTitle) => {
        const message = encodeURIComponent(`Hola! Quiero ${action} un ${serviceTitle}`);
        const url = `https://wa.me/${EliteMassage.config.WHATSAPP_NUMBER}?text=${message}`;
        window.open(url, '_blank');
    },

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
                EliteMassage.modules.Utils.showNotification('Mensaje enviado con éxito');
                form.reset();
            });
        }
    }
};

EliteMassage.modules.ServicesModule = {
    renderServices: () => {
        const servicesList = document.getElementById('services-list');
        if (!servicesList) return;
        servicesList.innerHTML = '';
        const startIndex = (EliteMassage.state.currentPage - 1) * EliteMassage.config.ITEMS_PER_PAGE;
        const endIndex = startIndex + EliteMassage.config.ITEMS_PER_PAGE;
        const currentServices = EliteMassage.state.services[EliteMassage.state.currentCategory].slice(startIndex, endIndex);

        currentServices.forEach(service => {
            const serviceElement = EliteMassage.modules.ServicesModule.createServiceElement(service);
            servicesList.appendChild(serviceElement);
        });

        EliteMassage.modules.PaginationModule.updatePagination();
    },

    createServiceElement: (service) => {
        const serviceElement = EliteMassage.modules.Utils.createElement('div', 'service-item');
        serviceElement.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <div class="service-buttons">
                <button class="reserve-button">Reservar</button>
                <button class="info-button">Saber más</button>
            </div>
        `;

        serviceElement.querySelector('.reserve-button').addEventListener('click', () => EliteMassage.modules.CommunicationModule.sendWhatsAppMessage('Reservar', service.title));
        serviceElement.querySelector('.info-button').addEventListener('click', () => EliteMassage.modules.UIModule.showPopup(service));

        return serviceElement;
    }
};

EliteMassage.modules.PackagesModule = {
    renderPackages: () => {
        const packageList = document.getElementById('package-list');
        if (!packageList) return;
        packageList.innerHTML = '';
        EliteMassage.state.packages.forEach(pkg => {
            const packageElement = EliteMassage.modules.PackagesModule.createPackageElement(pkg);
            packageList.appendChild(packageElement);
        });
    },

    createPackageElement: (pkg) => {
        const packageElement = EliteMassage.modules.Utils.createElement('div', 'package-item');
        packageElement.innerHTML = `
            <h3>${pkg.title}</h3>
            <p>${pkg.description}</p>
            <div class="package-buttons">
                <button class="reserve-button">Reservar</button>
                <button class="info-button">Saber más</button>
            </div>
        `;

        packageElement.querySelector('.reserve-button').addEventListener('click', () => EliteMassage.modules.CommunicationModule.sendWhatsAppMessage('Reservar', pkg.title));
        packageElement.querySelector('.info-button').addEventListener('click', () => EliteMassage.modules.UIModule.showPopup(pkg));

        return packageElement;
    }
};

EliteMassage.modules.UIModule = {
    showPopup: (data) => {
        const popup = document.getElementById('popup');
        const popupTitle = document.getElementById('popup-title');
        const popupImage = document.getElementById('popup-image');
        const popupDescription = document.getElementById('popup-description');

        if (!popup || !popupTitle || !popupImage || !popupDescription) return;

        popupTitle.textContent = data.title;
        popupImage.src = data.image || '';
        popupImage.alt = data.title;
        popupDescription.textContent = data.popupDescription || data.description;

        popup.style.display = 'flex';
        setTimeout(() => EliteMassage.modules.Utils.showNotification('¿Te interesa este servicio? ¡Contáctanos!'), 4000);
    },

    createVenetianBlinds: () => {
        const venetianContainer = document.getElementById('venetian-container');
        if (!venetianContainer) return;
        const image = `${EliteMassage.config.BASE_URL}copas.JPG`;
        
        for (let i = 0; i < 10; i++) {
            const blind = EliteMassage.modules.Utils.createElement('div', 'blind');
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
            const checkbox = EliteMassage.modules.Utils.createElement('div', 'checkbox');
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

    setupAccordion: () => {
        const header = document.querySelector('#sticky-header .container');
        if (!header) return;
        const accordionToggle = EliteMassage.modules.Utils.createElement('button', 'accordion-button', 'Menú <i class="fas fa-chevron-down"></i>');
        accordionToggle.id = 'accordion-toggle';
        
        const accordionContent = EliteMassage.modules.Utils.createElement('div', 'accordion-content');
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

    initializeGallery: () => {
        const galleryItems = document.querySelectorAll('.gallery-grid img');
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                EliteMassage.modules.UIModule.showPopup({
                    title: item.alt,
                    image: item.src,
                    description: 'Descripción de la imagen de la galería'
                });
            });
        });
    }
};

EliteMassage.modules.PaginationModule = {
    updatePagination: () => {
        const paginationContainer = document.querySelector('.pagination-container');
        if (!paginationContainer) return;
        paginationContainer.innerHTML = '';
        EliteMassage.state.totalPages = Math.ceil(EliteMassage.state.services[EliteMassage.state.currentCategory].length / EliteMassage.config.ITEMS_PER_PAGE);

        for (let i = 1; i <= EliteMassage.state.totalPages; i++) {
            const dot = EliteMassage.modules.Utils.createElement('div', `little-dot${i === EliteMassage.state.currentPage ? ' active' : ''}`);
            paginationContainer.appendChild(dot);
        }
    },

    changePage: (direction) => {
        EliteMassage.state.currentPage += direction;
        if (EliteMassage.state.currentPage < 1) EliteMassage.state.currentPage = EliteMassage.state.totalPages;
        if (EliteMassage.state.currentPage > EliteMassage.state.totalPages) EliteMassage.state.currentPage = 1;
        EliteMassage.modules.ServicesModule.renderServices();
    }
};

EliteMassage.modules.I18nModule = {
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
                    EliteMassage.modules.I18nModule.changeLanguage(lang);
                    languageOptions.style.display = 'none';
                });
            });
        }
    },

    changeLanguage: async (lang) => {
        try {
            const response = await fetch(`/translations/${lang}.json`);
            const translations = await response.json();
            // Aplicar traducciones aquí
            EliteMassage.state.language = lang;
            EliteMassage.modules.Utils.showNotification(`Idioma cambiado a ${lang}`);
        } catch (error) {
            console.error('Error al cambiar el idioma:', error);
            EliteMassage.modules.Utils.showNotification('Error al cambiar el idioma');
        }
    }
};

EliteMassage.modules.TestimonialsModule = {
    setupTestimonialCarousel: () => {
        const testimonials = [
            { name: "Cliente 1", text: "Excelente servicio, muy relajante." },
            { name: "Cliente 2", text: "Los masajes son increíbles, volveré pronto." },
            { name: "Cliente 3", text: "Una experiencia única y rejuvenecedora." }
        ];

        const carouselContainer = document.getElementById('card-slider');
        if (!carouselContainer) return;
        
        testimonials.forEach((testimonial, index) => {
            const testimonialElement = EliteMassage.modules.Utils.createElement('div', 'slider-item');
            testimonialElement.innerHTML = `
                <div class="animation-card_image">
                    <img src="${EliteMassage.config.BASE_URL}user-avatar.jpg" alt="${testimonial.name}">
                </div>
                <div class="animation-card_content">
                    <h3 class="animation-card_content_title">${testimonial.name}</h3>
                    <p class="animation-card_content_description">${testimonial.text}</p>
                </div>
            `;
            carouselContainer.appendChild(testimonialElement);
        });

        EliteMassage.modules.TestimonialsModule.startTestimonialAnimation();
    },

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

// Componentes
EliteMassage.components.Component = class {
    constructor(props = {}) {
        this.props = props;
        this.state = {};
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }

    render() {
        throw new Error('El método render debe ser implementado');
    }
};

EliteMassage.components.SugerenciasParaTi = class extends EliteMassage.components.Component {
    constructor(props) {
        super(props);
        this.state = {
            sugerencias: [
                { nombre: 'Mary Aguilar', usuario: 'maryaguilar0', imagen: 'https://via.placeholder.com/100' },
		{ nombre: 'Vanessa Villeg...', usuario: 'vanahi19', imagen: 'https://via.placeholder.com/100' },
            ]
        };
    }

    seguirUsuario(usuario) {
        console.log(`Siguiendo a ${usuario}`);
        // Aquí iría la lógica para seguir al usuario
    }

    render() {
        const container = EliteMassage.modules.Utils.createElement('div', 'sugerencias-container');
        
        const title = EliteMassage.modules.Utils.createElement('h2');
        title.textContent = 'Sugerencias para ti';
        container.appendChild(title);

        this.state.sugerencias.forEach(sugerencia => {
            const item = EliteMassage.modules.Utils.createElement('div', 'sugerencia-item');
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
            const seguirButton = item.querySelector('.sugerencia-seguir');
            seguirButton.addEventListener('click', () => this.seguirUsuario(sugerencia.usuario));
            container.appendChild(item);
        });

        return container;
    }
};

EliteMassage.components.ServiceCard = class extends EliteMassage.components.Component {
    constructor(props) {
        super(props);
    }

    reservar() {
        console.log(`Reservando ${this.props.title}`);
        EliteMassage.modules.CommunicationModule.sendWhatsAppMessage('Reservar', this.props.title);
    }

    mostrarInfo() {
        console.log(`Mostrando información de ${this.props.title}`);
        EliteMassage.modules.UIModule.showPopup(this.props);
    }

    render() {
        const card = EliteMassage.modules.Utils.createElement('div', 'service-card');
        card.innerHTML = `
            <div class="service-card-content">
                <h3 class="service-card-title">${this.props.title}</h3>
                <p class="service-card-description">${this.props.description}</p>
            </div>
            <div class="service-card-benefits">
                <h4>Beneficios:</h4>
                <ul>
                    ${this.props.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>
            <div class="service-card-duration">
                <p>Duración: ${this.props.duration}</p>
            </div>
            <div class="service-card-buttons">
                <button class="service-card-button service-card-button-reserve">Reservar</button>
                <button class="service-card-button service-card-button-info">Saber más</button>
            </div>
        `;

        const reserveButton = card.querySelector('.service-card-button-reserve');
        reserveButton.addEventListener('click', () => this.reservar());

        const infoButton = card.querySelector('.service-card-button-info');
        infoButton.addEventListener('click', () => this.mostrarInfo());

        return card;
    }
};

EliteMassage.components.FixedBottomBar = class extends EliteMassage.components.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { href: '#home', icon: 'home', text: 'Inicio' },
                { href: '#services', icon: 'spa', text: 'Servicios' },
                { href: '#packages', icon: 'gift', text: 'Paquetes' },
                { href: '#contact', icon: 'envelope', text: 'Contacto' }
            ]
        };
    }

    render() {
        const bar = EliteMassage.modules.Utils.createElement('nav', 'fixed-bottom-bar');
        bar.innerHTML = `
            <ul>
                ${this.state.items.map(item => `
                    <li>
                        <a href="${item.href}">
                            <i class="fas fa-${item.icon}"></i>
                            <span>${item.text}</span>
                        </a>
                    </li>
                `).join('')}
            </ul>
        `;
        return bar;
    }
};

// Función principal para inicializar la aplicación
EliteMassage.init = function() {
    EliteMassage.modules.ServicesModule.renderServices();
    EliteMassage.modules.PackagesModule.renderPackages();
    EliteMassage.modules.UIModule.createVenetianBlinds();
    EliteMassage.modules.UIModule.createExperienceCheckboxes();
    EliteMassage.modules.UIModule.setupAccordion();
    EliteMassage.modules.UIModule.initializeGallery();
    EliteMassage.modules.TestimonialsModule.setupTestimonialCarousel();
    EliteMassage.modules.CommunicationModule.setupContactForm();
    EliteMassage.modules.I18nModule.initLanguageSelector();

    // Event Listeners
    const prevButton = document.querySelector('.btn--prev');
    const nextButton = document.querySelector('.btn--next');
    if (prevButton) prevButton.addEventListener('click', () => EliteMassage.modules.PaginationModule.changePage(-1));
    if (nextButton) nextButton.addEventListener('click', () => EliteMassage.modules.PaginationModule.changePage(1));

    document.querySelectorAll('.choice-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.choice-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            EliteMassage.state.currentCategory = chip.dataset.category;
            EliteMassage.state.currentPage = 1;
            EliteMassage.modules.ServicesModule.renderServices();
        });
    });

    const closeButton = document.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            const popup = document.getElementById('popup');
            if (popup) popup.style.display = 'none';
        });
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

    this.initComponents();
};

EliteMassage.initComponents = function() {
    const root = document.getElementById('react-root');
    if (!root) {
        console.error('Element with id "react-root" not found');
        return;
    }

    const sugerencias = new EliteMassage.components.SugerenciasParaTi();
    root.appendChild(sugerencias.render());

    const serviceCardData = {
        title: "Masaje Relajante",
        description: "Un masaje suave para aliviar el estrés y la tensión.",
        benefits: ["Reduce el estrés", "Mejora la circulación", "Alivia dolores musculares"],
        duration: "60 minutos"
    };
    const serviceCard = new EliteMassage.components.ServiceCard(serviceCardData);
    root.appendChild(serviceCard.render());

    const bottomBar = new EliteMassage.components.FixedBottomBar();
    document.body.appendChild(bottomBar.render());
};

// Inicializar la aplicación cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://raw.githubusercontent.com/elitemassagemx/Home/main/data.json')
        .then(response => response.json())
        .then(data => {
            EliteMassage.state.services = data.services;
            EliteMassage.state.packages = data.services.paquetes;
            EliteMassage.init();
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
            EliteMassage.modules.Utils.showNotification('Error al cargar los datos. Por favor, intenta de nuevo más tarde.');
        });
});
