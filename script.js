

// Configuración global
const CONFIG = {
    BASE_URL: "https://raw.githubusercontent.com/elitemassagemx/Home/main/ICONOS/",
    ITEMS_PER_PAGE: 3,
    WHATSAPP_NUMBER: "5215640020305"
};

const CommunicationModule = {
    sendWhatsAppMessage: (action, serviceTitle) => {
        const message = encodeURIComponent(`Hola! Quiero ${action} un ${serviceTitle}`);
        const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${message}`;
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
                // Aquí iría la lógica para enviar el formulario
                Utils.showNotification('Mensaje enviado con éxito');
                form.reset();
            });
        }
    }
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

// Cargar datos al inicio
fetch('https://raw.githubusercontent.com/elitemassagemx/Home/main/data.json')
    .then(response => response.json())
    .then(data => {
        state.services = data.services;
        state.packages = data.services.paquetes;  // Asumiendo que 'paquetes' está dentro de 'services'
        init();  // Inicializar la aplicación después de cargar los datos
    })
    .catch(error => {
        console.error('Error al cargar los datos:', error);
        // Aquí puedes agregar alguna lógica para mostrar un mensaje de error al usuario
    });

// Módulo de Utilidades
const Utils = {
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

// Módulo de Servicios
const ServicesModule = {
    renderServices: () => {
        const servicesList = document.getElementById('services-list');
        if (!servicesList) return;
        servicesList.innerHTML = '';
        const startIndex = (state.currentPage - 1) * CONFIG.ITEMS_PER_PAGE;
        const endIndex = startIndex + CONFIG.ITEMS_PER_PAGE;
        const currentServices = state.services[state.currentCategory].slice(startIndex, endIndex);

        currentServices.forEach(service => {
            const serviceElement = ServicesModule.createServiceElement(service);
            servicesList.appendChild(serviceElement);
        });

        PaginationModule.updatePagination();
    },

    createServiceElement: (service) => {
        const serviceElement = Utils.createElement('div', 'service-item');
        serviceElement.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <div class="service-buttons">
                <button class="reserve-button">Reservar</button>
                <button class="info-button">Saber más</button>
            </div>
        `;

        serviceElement.querySelector('.reserve-button').addEventListener('click', () => CommunicationModule.sendWhatsAppMessage('Reservar', service.title));
        serviceElement.querySelector('.info-button').addEventListener('click', () => UIModule.showPopup(service));

        return serviceElement;
    }
};

// Módulo de Paquetes
const PackagesModule = {
    renderPackages: () => {
        const packageList = document.getElementById('package-list');
        if (!packageList) return;
        packageList.innerHTML = '';
        state.packages.forEach(pkg => {
            const packageElement = PackagesModule.createPackageElement(pkg);
            packageList.appendChild(packageElement);
        });
    },

    createPackageElement: (pkg) => {
        const packageElement = Utils.createElement('div', 'package-item');
        packageElement.innerHTML = `
            <h3>${pkg.title}</h3>
            <p>${pkg.description}</p>
            <div class="package-buttons">
                <button class="reserve-button">Reservar</button>
                <button class="info-button">Saber más</button>
            </div>
        `;

        packageElement.querySelector('.reserve-button').addEventListener('click', () => CommunicationModule.sendWhatsAppMessage('Reservar', pkg.title));
        packageElement.querySelector('.info-button').addEventListener('click', () => UIModule.showPopup(pkg));

        return packageElement;
    }
};

// Módulo de UI
const UIModule = {
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
        setTimeout(() => Utils.showNotification('¿Te interesa este servicio? ¡Contáctanos!'), 4000);
    },

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
    }
};

// Módulo de Paginación
const PaginationModule = {
    updatePagination: () => {
        const paginationContainer = document.querySelector('.pagination-container');
        if (!paginationContainer) return;
        paginationContainer.innerHTML = '';
        state.totalPages = Math.ceil(state.services[state.currentCategory].length / CONFIG.ITEMS_PER_PAGE);

        for (let i = 1; i <= state.totalPages; i++) {
            const dot = Utils.createElement('div', `little-dot${i === state.currentPage ? ' active' : ''}`);
            paginationContainer.appendChild(dot);
        }
    },

    changePage: (direction) => {
        state.currentPage += direction;
        if (state.currentPage < 1) state.currentPage = state.totalPages;
        if (state.currentPage > state.totalPages) state.currentPage = 1;
        ServicesModule.renderServices();
    }
};

// Módulo de Comunicación
const CommunicationModule = {
    sendWhatsAppMessage: (action, serviceTitle) => {
        const message = encodeURIComponent(`Hola! Quiero ${action} un ${serviceTitle}`);
        const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${message}`;
        window.open(url, '_blank');
    },

    setupContactForm: () => {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                // Aquí iría la lógica para enviar el formulario
                Utils.showNotification('Mensaje enviado con éxito');
                form.reset();
            });
        }
    }
};

// Módulo de Internacionalización
const I18nModule = {
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

// Función de inicialización
function init() {
    ServicesModule.renderServices();
    PackagesModule.renderPackages();
    UIModule.createVenetianBlinds();
    UIModule.createExperienceCheckboxes();
    UIModule.setupAccordion();
    UIModule.initializeGallery();
    TestimonialsModule.setupTestimonialCarousel();
    CommunicationModule.setupContactForm();
    I18nModule.initLanguageSelector();

    // Event Listeners
    const prevButton = document.querySelector('.btn--prev');
    const nextButton = document.querySelector('.btn--next');
    if (prevButton) prevButton.addEventListener('click', () => PaginationModule.changePage(-1));
    if (nextButton) nextButton.addEventListener('click', () => PaginationModule.changePage(1));

    document.querySelectorAll('.choice-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.choice-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            state.currentCategory = chip.dataset.category;
            state.currentPage = 1;
            ServicesModule.renderServices();
        });
    });

    // ... (rest of your init function)


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

    //GALERIA
var shadow = '0 20px 50px rgba(0,34,45,0.5)';

function styles(item_id, x, y, z , opacity, shadow){
	$(item_id).css({
		transform: 'translate3d('+ x +'px, ' + y + 'px, ' + z +'px) ',
		opacity: opacity,
		'box-shadow': shadow
	});
}

$('#one').click(function(){
	$('#one').addClass('focus');
	$('#two').removeClass('focus');
	$('#three').removeClass('focus');
	styles('#first', 0, 0, 0, 1, shadow);
	styles('#second', 70, -80, -50, 0.6, 'none');
	styles('#third', 110, 80, -60, 0.1, 'none');
}); 


$('#two').click(function(){
	$('#one').removeClass('focus');
	$('#two').addClass('focus');
	$('#three').removeClass('focus');
	styles('#first', 110, 80, -60, 0.1, 'none');
	styles('#second', 0, 0, 0, 1, shadow);
	styles('#third', 70, -80, -50, 0.6, 'none');
});
$('#three').click(function(){
	$('#one').removeClass('focus');
	$('#two').removeClass('focus');
	$('#three').addClass('focus');
	styles('#first', 70, -80, -50, 0.6, 'none');
	styles('#second', 110, 80, -60, 0.1, 'none');
	styles('#third', 0, 0, 0, 1, shadow);
});
    
    
    // Inicializar el menú acordeón
    const menuIcon = document.createElement('img');
    // Inicializar el menú acordeón (continuación)
    menuIcon.src = `${CONFIG.BASE_URL}menui.png`;
    menuIcon.alt = 'Menú';
    menuIcon.className = 'menu-icon';
    document.body.appendChild(menuIcon);

    const accordion = document.createElement('div');
    accordion.className = 'accordion-menu';
    accordion.innerHTML = `
        <div class="accordion-content">
            <a href="#servicios">Servicios</a>
            <a href="#paquetes">Paquetes</a>
            <a href="#experiencias">Experiencias</a>
            <a href="#galeria">Galería</a>
            <a href="#contacto">Contacto</a>
        </div>
    `;
    document.body.appendChild(accordion);

    menuIcon.addEventListener('click', () => {
        accordion.classList.toggle('active');
    });

    // Inicializar el selector de idioma
    const translateIcon = document.getElementById('translate-icon');
    if (translateIcon) {
        translateIcon.addEventListener('click', () => {
            I18nModule.changeLanguage(state.language === 'es' ? 'en' : 'es');
        });
    }
}
// Llama a init() cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://raw.githubusercontent.com/elitemassagemx/Home/main/data.json')
        .then(response => response.json())
        .then(data => {
            state.services = data.services;
            state.packages = data.services.paquetes;
            init();
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
            Utils.showNotification('Error al cargar los datos. Por favor, intenta de nuevo más tarde.');
        });
});


document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });

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

    var accordion = new Accordion(document.getElementById('accordion'), false);
});
