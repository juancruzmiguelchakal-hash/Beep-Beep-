// BeepBeep Core Logic - Tailwind Edition

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initHeroSlider(); // Add this call
    initSearch();
    initFilters();
    initAnimations();
    initForms();
});

// Function to initialize the hero slider
function initHeroSlider() {
    const sliderContainer = document.querySelector('.hero-slider');
    if (sliderContainer) {
        const progressFill = sliderContainer.querySelector('.swiper-autoplay-progress .progress-fill');

        const swiper = new Swiper(sliderContainer, {
            // Optional parameters
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },

            // Autoplay as requested
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true, // Pauses on hover
            },

            // Pagination as requested
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // Navigation arrows as requested
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // Event listeners for progress bar
            on: {
                autoplayTimeLeft(s, time, progress) {
                    if (progressFill) {
                        progressFill.style.transform = `scaleX(${1 - progress})`;
                    }
                },
                slideChange() {
                    // Reset progress on slide change if needed, though autoplayTimeLeft handles it well
                    if (progressFill) {
                        progressFill.style.transition = 'transform 0.1s linear'; // quick reset
                        progressFill.style.transform = 'scaleX(0)';
                        setTimeout(() => {
                            progressFill.style.transition = ''; // remove temporary transition
                        }, 100);
                    }
                }
            }
        });
    }
}

// Mock Database
const MOCK_DB = [
    {
        id: 'simon-pasteleria',
        name: 'Simón Pastelería',
        category: 'pasteleria',
        rating: 0.0,
        time: 'Próximamente',
        cost: 0,
        img: './assets/images/comercios/Simon Pasteleria/simon-pasteleria.jpg',
        hasPromo: true,
        menu: [],
        schedule: {
            lunes: '09:00 - 18:00',
            martes: '09:00 - 18:00',
            miercoles: '09:00 - 18:00',
            jueves: 'Cerrado',
            viernes: 'Cerrado',
            sabado: 'Cerrado',
            domingo: 'Cerrado'
        }
    },
    {
        id: 'beep-beep-market',
        name: 'Beep Beep Market',
        category: 'market',
        rating: 0.0,
        time: 'Próximamente',
        cost: 0,
        img: './assets/images/comercios/Beep Beep Market/beep-beep-market.jpg',
        hasPromo: true,
        menu: [
            { name: 'Vino Dv Catena Cabernet-Malbec 750 MI', price: 12935 },
            { name: 'Vino Catena Zapata Malbec Argentino 750', price: 68900 },
            { name: 'Vino Alma Negra De Ernesto Catena 750 MI', price: 21970 },
            { name: 'Vino El Enemigo Malbec 750', price: 19890 },
            { name: 'Vino Dv Catena Malbec-Malbec 750 MI', price: 18090 },
            { name: 'Vino Saint Felicien Malbec 750 MI', price: 9750 },
            { name: 'Gin Bombay Sapphire 750 MI', price: 22500 },
            { name: 'Aperitivo Martini Rosso 950ml', price: 7950 },
            { name: 'Vermut Rosso Mil Demonios 750 MI', price: 15900 },
            { name: 'Campari 750ml', price: 12950 },
            { name: 'Aperitivo Aperol 750 MI', price: 11500 },
            { name: 'Fernet Branca 750 MI', price: 14590 },
            { name: 'Vermut Carpano Rosso 950 MI', price: 7950 },
            { name: 'Combo Negroni: Gin, Campari y Martini', price: 49500 },
            { name: 'Vaso Fernetero 750ml', price: 6590 }
        ],
        schedule: {
            lunes: '09:00 - 11:55',
            martes: 'Cerrado',
            miercoles: 'Cerrado',
            jueves: 'Cerrado',
            viernes: '09:00 - 11:55',
            sabado: '09:00 - 11:55',
            domingo: '09:00 - 11:55'
        }
    },
    {
        id: 'brumee',
        name: 'Brumée',
        category: 'tienda',
        rating: 0.0,
        time: 'Próximamente',
        cost: 0,
        img: './assets/images/comercios/Brumée/brumee.jpg',
        hasPromo: true,
        menu: [
            { name: 'Scon de queso', price: 4000 },
            { name: 'Pan de maíz', price: 3000 },
            { name: 'Galleta de zanahoria', price: 5000 },
            { name: 'Galleta Red velvet', price: 5000 },
            { name: 'Torta de zanahoria', price: 7000 },
            { name: 'Cookie choco, toffee, maní', price: 5500 },
            { name: 'Cheese cake frutos rojos', price: 7000 },
            { name: 'Lemon pie', price: 7000 },
            { name: 'Chocotorta', price: 7000 },
            { name: 'Cookie pistacho, choco blanco y frambuesa', price: 5500 },
            { name: 'Cookie Pepito', price: 3000 },
            { name: 'Pepa de frutilla (S/TACC)', price: 3500 },
            { name: 'Brownie (S/TACC)', price: 5500 },
            { name: 'Budín de limón y arándanos (S/TACC)', price: 4000 }
        ],
        schedule: {
            lunes: '16:00 - 19:30',
            martes: '16:00 - 19:30',
            miercoles: '16:00 - 19:30',
            jueves: '16:00 - 19:30',
            viernes: '16:00 - 19:30',
            sabado: '15:00 - 19:00',
            domingo: 'Cerrado'
        }
    },
    {
        id: 'rural-alfajores',
        name: 'Rural Alfajores Artesanales',
        category: 'alfajores',
        rating: 0.0,
        time: 'Próximamente',
        cost: 0,
        img: './assets/images/comercios/Alfajores Artesanales/rural-alfajores.jpg',
        hasPromo: true,
        menu: [
            { name: 'Clásicos Dulce de Leche', description: 'caja de 6 alfajores de dulce de leche con baño de chocolate semiamargo.', price: 9600 },
            { name: 'ALFAJORES SURTIDOS x 6 unidades', description: 'Promo caja de 6 alfajores surtidos', price: 12000 }
        ],
        schedule: {
            lunes: '13:00 - 18:00',
            martes: '09:00 - 18:00',
            miercoles: 'Cerrado',
            jueves: '09:00 - 18:00',
            viernes: 'Cerrado',
            sabado: '09:00 - 20:00',
            domingo: '09:00 - 18:00'
        }
    },
    {
        id: 'casa-bardelli',
        name: 'Casa Bardelli',
        category: 'restaurante',
        rating: 0.0,
        time: 'Próximamente',
        cost: 0,
        img: './assets/images/comercios/Casa Bardelli/casa-bardelli.jpg',
        hasPromo: true,
        menu: [],
        schedule: null
    },
    {
        id: 'buona',
        name: 'Buona',
        category: 'restaurante',
        rating: 0.0,
        time: 'Próximamente',
        cost: 0,
        img: './assets/images/comercios/Buona/buona1.jpg',
        hasPromo: true,
        menu: [
            { name: 'Lata Bock Blest', price: 5000, category: 'cervezas' },
            { name: 'Lata Honey Queen Blest', price: 5500, category: 'cervezas' },
            { name: 'Lata APA Blest', price: 5500, category: 'cervezas' },
            { name: 'Lata Pilsen Blest', price: 5000, category: 'cervezas' },
            { name: 'Lata Scotch Blest', price: 5000, category: 'cervezas' },
            { name: 'Lata Mexican Lager Blest', price: 5000, category: 'cervezas' },
            { name: 'Lata Ipa Blest', price: 5500, category: 'cervezas' },
            { name: 'Ositos leche rellenos con dulce de leche Rapanui x6', description: 'Deliciosos ositos de chocolate con leche, con un suave y cremoso relleno. Sin gluten.', price: 7200, category: 'chocolates' },
            { name: 'Tableta mini gota leche con almendras Rapanui', description: 'Tableta chocolate con leche con almendras relleno con dulce de leche. Sin gluten.', price: 5700, category: 'chocolates' },
            { name: 'Caja chocolates Rapanui x250gr', description: 'Selección especial de bombones y chocolates Rapanui.', price: 23000, category: 'chocolates' },
            { name: 'Caja Marroc crocante Rapanui x275gr', description: 'Bocadito de chocolate con leche relleno con pasta de maní y cereal. Sin gluten.', price: 23000, category: 'chocolates' },
            { name: 'Ramon Rapanui x200gr', description: 'Rama de chocolate con leche y corazón de chocolate blanco. Sin gluten.', price: 18000, category: 'chocolates' },
            { name: 'Franui leche x150gr Rapanui', description: 'Frambuesas bañadas en chocolate con leche y blanco. Sin gluten.', price: 8000, category: 'chocolates' },
            { name: 'Rama amarga Rapanui x60gr', description: 'Chocolate Amargo en Rama. Sin gluten.', price: 6000, category: 'chocolates' },
            { name: 'Cuarto de libra triple', description: '3 medallones de 120gr, cheddar, salsa cuarto de libra, cebolla y pepino.', price: 18300, category: 'hamburguesas' },
            { name: 'Mexican simple', description: 'Medallon de 120gr con cheddar, guacamole, tomate y cebolla morada.', price: 16900, category: 'hamburguesas' },
            { name: 'Criolla doble', description: '2 Medallones de 120gr con queso, lechuga, tomate, jamón y huevo. Incluye papas fritas.', price: 18200, category: 'hamburguesas' },
            { name: 'Roque triple', description: '3 Medallones de 120gr con rúcula, queso azul y hongos. Incluye papas fritas.', price: 20700, category: 'hamburguesas' },
            { name: 'Tasty doble', description: '2 Medallones de 120gr con cheddar, lechuga, tomate, cebolla y salsa tasty.', price: 18200, category: 'hamburguesas' },
            { name: 'Crispy doble', description: '2 Medallones 120gr con cheddar, panceta, cebollita crispy y salsa crispy.', price: 15700, category: 'hamburguesas' },
            { name: 'Clasica simple', description: 'Medallon de 120gr con cheddar, lechuga, tomate y cebolla morada. Incluye papas fritas.', price: 15400, category: 'hamburguesas' },
            { name: 'Cheese con Panceta triple', description: '3 medallones de 120gr con cheddar y panceta. Incluye papas fritas.', price: 18300, category: 'hamburguesas' },
            { name: 'Americana triple', description: '3 Medallones de 120gr con cheddar, panceta, cebolla y huevo. Incluye papas fritas.', price: 20700, category: 'hamburguesas' },
            { name: 'Cheeseburger simple', description: 'Medallon 120gr con cheddar. Incluye papas fritas.', price: 12100, category: 'hamburguesas' },
            { name: 'Americana simple', description: 'Medallon de 120gr con cheddar, panceta, cebolla y huevo. Incluye papas fritas.', price: 15700, category: 'hamburguesas' },
            { name: 'Cheeseburger con panceta simple', description: 'Medallon 120gr con panceta y cheddar. Incluye papas fritas.', price: 13300, category: 'hamburguesas' },
            { name: 'Criolla simple', description: 'Medallon de 120gr con queso, lechuga, tomate, jamón y huevo. Incluye papas fritas.', price: 15700, category: 'hamburguesas' },
            { name: 'Mexican doble', description: '2 Medallones de 120gr con cheddar, guacamole, tomate y cebolla morada.', price: 19400, category: 'hamburguesas' },
            { name: 'Mexican triple', description: '3 Medallones de 120gr con cheddar, guacamole, tomate y cebolla morada.', price: 21900, category: 'hamburguesas' },
            { name: 'Cheese con panceta doble', description: '2 medallones de 120gr con cheddar y panceta. Incluye papas fritas.', price: 15800, category: 'hamburguesas' },
            { name: 'Roque simple', description: 'Medallon de 120gr con rúcula, queso azul y hongos. Incluye papas fritas.', price: 15700, category: 'hamburguesas' },
            { name: 'Cuarto de libra doble', description: '2 medallones de 120gr, cheddar, salsa cuarto de libra, cebolla y pepino.', price: 15800, category: 'hamburguesas' },
            { name: 'Sampler', description: '1 Tasty simple, 1 cheeseburger simple y 1 crispy simple, 1 papas fritas.', price: 36000, category: 'hamburguesas' },
            { name: 'Tasty triple', description: '3 Medallones de 120gr con cheddar, lechuga, tomate, cebolla y salsa tasty.', price: 20700, category: 'hamburguesas' },
            { name: 'Palta, rucula y pepino simple', description: 'Medallon de 120gr con palta, rúcula, pepino. Incluye papas fritas.', price: 14500, category: 'hamburguesas' },
            { name: 'Crispy simple', description: 'Medallon 120gr con cheddar, panceta, cebollita crispy y salsa crispy. Incluye papas fritas.', price: 15700, category: 'hamburguesas' },
            { name: 'Cuarto de libra simple', description: 'Medallon 120gr, cheddar, salsa cuarto de libra, cebolla y pepino.', price: 13300, category: 'hamburguesas' },
            { name: 'Roque doble', description: '2 Medallones de 120gr con rúcula, queso azul y hongos. Incluye papas fritas.', price: 18200, category: 'hamburguesas' },
            { name: 'Criolla triple', description: '3 Medallones de 120gr con queso, lechuga, tomate, jamón y huevo. Incluye papas fritas.', price: 20700, category: 'hamburguesas' },
            { name: 'Clásica doble', description: '2 Medallones de 120gr con cheddar, lechuga, tomate y cebolla morada. Incluye papas fritas.', price: 17000, category: 'hamburguesas' },
            { name: 'Clásica triple', description: '3 Medallones de 120gr con cheddar, lechuga, tomate y cebolla morada. Incluye papas fritas.', price: 19500, category: 'hamburguesas' },
            { name: 'Cheeseburger triple', description: '3 medallones de 120gr con cheddar. Incluye papas fritas.', price: 17100, category: 'hamburguesas' },
            { name: 'Cheeseburger doble', description: '2 medallones de 120gr con cheddar. Incluye papas fritas.', price: 14600, category: 'hamburguesas' },
            { name: 'Crispy triple', description: '3 Medallones 120gr con cheddar, panceta, cebollita crispy y salsa crispy.', price: 20700, category: 'hamburguesas' },
            { name: 'Americana doble', description: '2 Medallones de 120gr con cheddar, panceta, cebolla y huevo. Incluye papas fritas.', price: 18200, category: 'hamburguesas' },
            { name: 'Palta, rucula y pepino doble', description: '2 Medallones de 120gr con palta, rúcula, pepino. Incluye papas fritas.', price: 17000, category: 'hamburguesas' },
            { name: 'Palta, rucula y pepino triple', description: '3 Medallones de 120gr con palta, rúcula, pepino. Incluye papas fritas.', price: 19500, category: 'hamburguesas' },
            { name: 'Tasty simple', description: 'Medallon de 120gr con cheddar, lechuga, tomate, cebolla y salsa tasty.', price: 15700, category: 'hamburguesas' },
            { name: 'Empanadas de carne fritas', description: '3 empanadas de carne cortada a cuchillo fritas.', price: 10900, category: 'fritos' },
            { name: 'Milanesa de carne Mexican', description: 'Milanesa de carne con guacamole, tomate y cebolla morada. Incluye papas fritas.', price: 22000, category: 'milanesas' },
            { name: 'Milanesa de carne a caballo', description: 'Milanesa de carne con huevo a la plancha. Incluye papas fritas.', price: 19300, category: 'milanesas' },
            { name: 'Milanesa de carne americana', description: 'Milanesa de carne con cheddar, panceta y verdeo. Incluye papas fritas.', price: 20000, category: 'milanesas' },
            { name: 'Milanesa de carne con rucula y cherry', description: 'Milanesa de carne con muzzarella, rúcula y cherry. Incluye papas fritas.', price: 19300, category: 'milanesas' },
            { name: 'Milanesa de carne napolitana', description: 'Milanesa de carne con salsa de tomate, muzzarella, tomate y ajo. Incluye papas fritas.', price: 19300, category: 'milanesas' },
            { name: 'Milanesa de carne capresse', description: 'Milanesa de carne con muzzarella, tomate y albahaca. Incluye papas fritas.', price: 19300, category: 'milanesas' },
            { name: 'Milanesa de carne completa', description: 'Milanesa de carne con muzzarella, jamón cocido, tomate y huevo a la plancha.', price: 20000, category: 'milanesas' },
            { name: 'Milanesa de carne cuatro quesos', description: 'Milanesa de carne con muzzarella, queso azul, cheddar y dambo. Incluye papas fritas.', price: 22000, category: 'milanesas' },
            { name: 'Milanesa de carne', description: 'Milanesa de carne con papas fritas.', price: 17000, category: 'milanesas' },
            { name: 'Milanesa con cebolla y jamon', description: 'Milanesa de carne con muzzarella, jamón cocido y cebolla. Incluye papas fritas.', price: 19300, category: 'milanesas' }
        ],
        schedule: {
            lunes: 'Cerrado',
            martes: 'Cerrado',
            miercoles: '20:00 - 22:45',
            jueves: '20:00 - 23:45',
            viernes: 'Cerrado',
            sabado: '20:00 - 23:45',
            domingo: 'Cerrado'
        }
    },
    {
        id: 'el-michizen',
        name: 'El Michizen',
        category: 'sushi',
        rating: 0.0,
        time: 'Próximamente',
        cost: 0,
        img: './assets/images/comercios/El Michizen/el-michizen.jpg',
        hasPromo: true,
        menu: [],
        schedule: null
    },
    {
        id: 'fonos-argentina',
        name: 'Fonos Argentina',
        category: 'tecnologia',
        rating: 0.0,
        time: 'Próximamente',
        cost: 0,
        img: './assets/images/comercios/Fonos/fonos-argentina.jpg',
        hasPromo: true,
        menu: [
            { name: 'Memoria SanDisk', price: 14000, category: 'almacenamiento' },
            { name: 'Memoria SanDisk 32gb', price: 10000, category: 'almacenamiento' },
            { name: 'Cable tipo C', description: 'Cable tipo C', price: 3000, category: 'carga' },
            { name: 'Auriculares Inalámbricos bluetooth', description: 'Auriculares casco', price: 8000, category: 'auriculares' },
            { name: 'Auriculares bluetooth', description: 'Auriculares pequeños', price: 15000, category: 'auriculares' }
        ],
        schedule: {
            lunes: '10:00 - 18:00',
            martes: 'Cerrado',
            miercoles: 'Cerrado',
            jueves: 'Cerrado',
            viernes: '10:00 - 18:00',
            sabado: 'Cerrado',
            domingo: '10:00 - 18:00'
        }
    }
];

function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-md');
            if (navbar.classList.contains('bg-white/80')) {
                navbar.classList.remove('bg-white/80');
                navbar.classList.add('bg-white/95');
            }
        } else {
            navbar.classList.remove('shadow-md');
            if (navbar.classList.contains('bg-white/95')) {
                navbar.classList.remove('bg-white/95');
                navbar.classList.add('bg-white/80');
            }
        }
    });

    // Mobile Menu Toggle
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

function initSearch() {
    const input = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('searchResults');

    if (!input || !resultsContainer) return;

    input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (!query) {
            resultsContainer.classList.add('hidden');
            return;
        }

        let restaurantResults = [];
        let dishResults = [];

        MOCK_DB.forEach(restaurant => {
            // Check restaurant name or category
            if (restaurant.name.toLowerCase().includes(query) ||
                restaurant.category.toLowerCase().includes(query)) {
                restaurantResults.push({
                    type: 'restaurant',
                    data: restaurant
                });
            }

            // Check dishes
            if (restaurant.menu) {
                restaurant.menu.forEach(dish => {
                    if (dish.name.toLowerCase().includes(query)) {
                        dishResults.push({
                            type: 'dish',
                            data: dish,
                            restaurant: restaurant.name,
                            restaurantImg: restaurant.img,
                            restaurantId: restaurant.id
                        });
                    }
                });
            }
        });

        // Combine results: Restaurants first, then dishes
        const results = [...restaurantResults, ...dishResults];
        renderSearchResults(results, resultsContainer);
    });

    // Hide when clicking outside
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !resultsContainer.contains(e.target)) {
            resultsContainer.classList.add('hidden');
        }
    });
}

function renderSearchResults(results, container) {
    container.classList.remove('hidden');
    container.innerHTML = '';

    if (results.length === 0) {
        container.innerHTML = `
            <div class="p-6 text-center text-gray-500">
                <i class="fa-solid fa-motorcycle text-3xl text-primary mb-2"></i>
                <p>¡Bip Bip! No encontramos eso.</p>
                <a href="contacto.html" class="text-primary font-bold text-sm hover:underline mt-2 block">Pedir ayuda &rarr;</a>
            </div>
        `;
        return;
    }

    results.forEach(result => {
        const div = document.createElement('div');
        div.className = 'flex items-center gap-3 p-4 hover:bg-gray-50 border-b border-gray-100 last:border-0 cursor-pointer transition-colors group';

        if (result.type === 'restaurant') {
            const item = result.data;
            div.innerHTML = `
                <div class="w-10 h-10 rounded-full bg-cover bg-center shadow-sm" style="background-image: url('${item.img}')"></div>
                <div>
                    <h4 class="font-bold text-dark text-sm">${item.name}</h4>
                    <div class="flex items-center gap-2 text-xs text-gray-400">
                        <span class="bg-gray-100 px-2 py-0.5 rounded text-dark uppercase font-bold tracking-wider text-[10px]">${item.category}</span>
                        <span class="text-yellow-500"><i class="fa-solid fa-star"></i> ${item.rating}</span>
                    </div>
                </div>
                <i class="fa-solid fa-chevron-right ml-auto text-primary text-xs opacity-0 group-hover:opacity-100 transition-all"></i>
            `;
            div.addEventListener('click', () => {
                window.location.href = `menu-${item.id}.html`;
            });
        } else {
            const dish = result.data;
            div.innerHTML = `
                <div class="w-10 h-10 rounded-lg bg-cover bg-center shadow-sm" style="background-image: url('${result.restaurantImg}')"></div>
                <div class="flex-1">
                    <div class="flex justify-between items-start">
                        <h4 class="font-bold text-dark text-sm">${dish.name}</h4>
                        <span class="text-primary font-bold text-sm">$${dish.price}</span>
                    </div>
                    <p class="text-[10px] text-gray-400">en <span class="font-bold text-gray-600">${result.restaurant}</span></p>
                </div>
                <i class="fa-solid fa-arrow-right ml-auto text-primary text-xs opacity-0 group-hover:opacity-100 transition-all"></i>
            `;
            div.addEventListener('click', () => {
                window.location.href = `menu-${result.restaurantId}.html`;
            });
        }

        container.appendChild(div);
    });
}

function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    const grid = document.getElementById('restaurantGrid');

    if (!grid) return;

    // Load initial
    renderGrid(MOCK_DB, grid);

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // UI
            buttons.forEach(b => {
                b.classList.remove('bg-primary', 'text-white', 'shadow-lg');
                b.classList.add('bg-white', 'text-dark', 'shadow-sm');
            });
            btn.classList.remove('bg-white', 'text-dark', 'shadow-sm');
            btn.classList.add('bg-primary', 'text-white', 'shadow-lg');

            // Logic
            const filterType = btn.dataset.filter;
            grid.style.opacity = '0';
            grid.style.transform = 'translateY(10px)';

            setTimeout(() => {
                let filtered = [...MOCK_DB]; // Clone to not mutate

                switch (filterType) {
                    case 'fastest':
                        // Extract min time: "15-25 min" -> 15
                        filtered.sort((a, b) => {
                            const timeA = parseInt(a.time.split('-')[0]);
                            const timeB = parseInt(b.time.split('-')[0]);
                            return timeA - timeB;
                        });
                        break;
                    case 'famous':
                        // Sort by rating desc
                        filtered.sort((a, b) => b.rating - a.rating);
                        break;
                    case 'cheapest':
                        // Sort by cost asc
                        filtered.sort((a, b) => a.cost - b.cost);
                        break;
                    case 'promo':
                        // Filter by hasPromo
                        filtered = filtered.filter(item => item.hasPromo);
                        break;
                    case 'open':
                        // Mock: shuffle to show "random open" places or just all for now
                        // Let's just return all but maybe randomly shuffled for variety
                        filtered.sort(() => Math.random() - 0.5);
                        break;
                    case 'all':
                    default:
                        // No filter/sort change (default ID order)
                        break;
                }

                renderGrid(filtered, grid);
                grid.style.opacity = '1';
                grid.style.transform = 'translateY(0)';
            }, 300);
        });
    });
}

function renderGrid(items, container) {
    container.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'group bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(227,27,35,0.3)] hover:-translate-y-2 transition-all duration-300 relative border border-transparent hover:border-primary/10 cursor-pointer';

        // Navigation Logic
        const goToMenu = () => {
            window.location.href = `menu-${item.id}.html`;
        };
        card.addEventListener('click', goToMenu);

        card.innerHTML = `
            <div class="h-48 bg-cover bg-center relative" style="background-image: url('${item.img}')">
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                    <i class="fa-solid fa-clock text-primary"></i>
                    ${item.time}
                </div>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="font-bold text-lg text-dark">${item.name}</h3>
                    <div class="flex items-center gap-1 text-sm font-bold text-yellow-500">
                        <i class="fa-solid fa-star"></i> ${item.rating}
                    </div>
                </div>
                <div class="flex justify-between text-sm text-gray-500 mb-6">
                    <p class="capitalize text-xs font-medium bg-gray-100 px-2 py-1 rounded text-gray-600">${item.category}</p>
                    <p>${item.cost === 0 ? 'Envío Gratis' : '$' + item.cost}</p>
                </div>
                <button onclick="event.stopPropagation(); window.location.href='menu-${item.id}.html'" class="w-full bg-dark text-white font-bold py-3 rounded-xl group-hover:bg-primary transition-colors flex items-center justify-center gap-2 opacity-90 group-hover:opacity-100 group-hover:shadow-lg">
                    Ver Menú <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </button>
            </div>
        `;
        container.appendChild(card);
    });

}

function initForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;

            btn.disabled = true;
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Enviando...';

            setTimeout(() => {
                btn.classList.remove('bg-primary');
                btn.classList.add('bg-green-500');
                btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Enviado!';

                setTimeout(() => {
                    form.reset();
                    btn.classList.remove('bg-green-500');
                    btn.classList.add('bg-primary');
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                }, 2000); // Wait 2s before resetting
            }, 1500); // Simulate API call
        });
    });
}

function initAnimations() {
    // Already handled by CSS classes and simple interactions
    // Intersection Observer for scroll elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
        observer.observe(el);
    });
}
