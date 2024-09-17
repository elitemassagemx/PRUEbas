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
    components: {},
    router: {
        routes: {
            '/': 'home',
            '/services': 'services',
            '/packages': 'packages',
            '/contact': 'contact'
        },
        init: () => {
            window.addEventListener('popstate', EliteMassage.router.handleRouteChange);
            EliteMassage.router.handleRouteChange();
        },
        handleRouteChange: () => {
            const path = window.location.pathname;
            const route = EliteMassage.router.routes[path] || 'home';
            EliteMassage.router.loadPage(route);
        },
        loadPage: (page) => {
            // Lógica para cargar la página basada en el enrutador
            console.log(`Cargando página: ${page}`);
            // Aquí puedes implementar la lógica para cargar la vista correspondiente
            // Ejemplo: Usar fetch para obtener el contenido de la página y actualizar el DOM
            fetch(`${page}.html`)
                .then(response => response.text())
                .then(html => {
                    document.getElementById('content').innerHTML = html;
                })
                .catch(error => {
                    console.error('Error al cargar la página:', error);
                });
        }
    }
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
        if (toast) {
            toast.querySelector('#desc').textContent = message;
            toast.className = 'show';
            setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 5000);
        }
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
        const currentServices = EliteMassage.state.services[EliteMassage.state.currentCategory]?.slice(startIndex, endIndex) || [];

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
        EliteMassage.state.packages?.forEach(pkg => {
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
        const accordionToggle = EliteMassage.modules.Utils.createElement('button', 'accordion-button',        'Accordion Button');
        header.appendChild(accordionToggle);

        const accordionContent = EliteMassage.modules.Utils.createElement('div', 'accordion-content');
        accordionContent.innerHTML = `
            <p>Contenido del acordeón aquí...</p>
        `;
        header.appendChild(accordionContent);

        accordionToggle.addEventListener('click', () => {
            if (accordionContent.style.display === 'none' || !accordionContent.style.display) {
                accordionContent.style.display = 'block';
            } else {
                accordionContent.style.display = 'none';
            }
        });
    }
};

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    EliteMassage.router.init();
    EliteMassage.modules.CommunicationModule.setupContactForm();
    EliteMassage.modules.UIModule.createVenetianBlinds();
    EliteMassage.modules.UIModule.createExperienceCheckboxes();
    EliteMassage.modules.UIModule.setupAccordion();

    // Suponiendo que tienes datos estáticos para los servicios y paquetes
    EliteMassage.state.services = {
        individual: [
            { title: 'Servicio 1', description: 'Descripción del servicio 1' },
            { title: 'Servicio 2', description: 'Descripción del servicio 2' },
            // Más servicios...
        ]
    };
    EliteMassage.state.packages = [
        { title: 'Paquete 1', description: 'Descripción del paquete 1' },
        { title: 'Paquete 2', description: 'Descripción del paquete 2' },
        // Más paquetes...
    ];

    EliteMassage.modules.ServicesModule.renderServices();
    EliteMassage.modules.PackagesModule.renderPackages();
});

// Asegúrate de que los estilos CSS estén configurados
// Aquí se pueden agregar o ajustar estilos CSS necesarios para el diseño adecuado


