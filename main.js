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
    },
    {
        id: 'beep-beep-kiosco',
        name: 'Beep Beep! Kiosco',
        category: 'kiosco',
        rating: 0.0,
        time: 'Abierto ahora',
        cost: 0,
        img: './assets/images/logo.png',
        hasPromo: true,
        menu: [
            // Chocolates y Alfajores
            { name: 'Cofler Block Alfajor relleno de maní', price: 2100, category: 'chocolates' },
            { name: 'Block Triple', price: 2100, category: 'chocolates' },
            { name: 'Jorgito Alfajor clásico (dulce de leche)', price: 1000, category: 'alfajores' },
            { name: 'Jorgito Alfajor chocolate', price: 1000, category: 'alfajores' },
            { name: 'Alfajor Oreo Triple', price: 2700, category: 'alfajores' },
            { name: 'Alfajor Milka Triple Mousse', price: 2700, category: 'alfajores' },
            { name: 'Alfajor Chocolinas Chocotorta', price: 2100, category: 'alfajores' },
            { name: 'Bon o Bon bombón chocolate blanco', price: 800, category: 'chocolates' },
            { name: 'Bon o Bon bombón chocolate con leche', price: 800, category: 'chocolates' },
            { name: 'Bon o Bon Chocolinas', price: 800, category: 'chocolates' },
            { name: 'Cofler Chocolate con Leche', price: 4700, category: 'chocolates' },
            { name: 'Cofler Block Chocolate en barra 38 g', price: 2600, category: 'chocolates' },
            { name: 'KitKat chocolate con leche 41,5 g', price: 2000, category: 'chocolates' },
            { name: 'Chocolate Shot con maní 35 g', price: 2900, category: 'chocolates' },
            { name: 'Bocadito Marroc Felfort', price: 1300, category: 'chocolates' },
            // Cigarrillos
            { name: 'Marlboro Red Común Box 20', price: 5700, category: 'cigarrillos' },
            { name: 'Marlboro Red Box', price: 6100, category: 'cigarrillos' },
            { name: 'Marlboro Crafted Red Box', price: 3500, category: 'cigarrillos' },
            { name: 'Marlboro Crafted Forward Box', price: 3500, category: 'cigarrillos' },
            { name: 'Marlboro Crafted Forward Soft', price: 3100, category: 'cigarrillos' },
            { name: 'Marlboro Crafted Red Común', price: 3100, category: 'cigarrillos' },
            { name: 'Lucky Strike KS', price: 5200, category: 'cigarrillos' },
            { name: 'Lucky Strike Origen Red', price: 3300, category: 'cigarrillos' },
            { name: 'Lucky Strike Cool KS', price: 5200, category: 'cigarrillos' },
            { name: 'Philip Morris Box 20', price: 5400, category: 'cigarrillos' },
            { name: 'Philip Morris Blue Spin Box', price: 5400, category: 'cigarrillos' },
            // Golosinas Frutales
            { name: 'Mogul gomitas en rollo frutales', price: 800, category: 'golosinas' },
            { name: 'Mogul gomitas piecito', price: 900, category: 'golosinas' },
            { name: 'Mogul gomitas ositos', price: 900, category: 'golosinas' },
            { name: 'Mogul gomitas Extreme ácido dulce', price: 800, category: 'golosinas' },
            { name: 'Mogul caramelos rellenos Splash', price: 1100, category: 'golosinas' },
            { name: 'Mogul caramelos Extreme Splash', price: 1100, category: 'golosinas' },
            { name: 'Chicle Beldent menta 20 g', price: 1300, category: 'golosinas' },
            { name: 'Chicle Topline menta', price: 1300, category: 'golosinas' },
            // Higiene y Salud Sexual
            { name: 'Tampones o.b. Siempre Libre Mini x8', price: 3500, category: 'higiene' },
            { name: 'Tampones o.b. Siempre Libre Medio x8', price: 3500, category: 'higiene' },
            { name: 'Tampones o.b. Siempre Libre Super x8', price: 3500, category: 'higiene' },
            { name: 'Toallitas Always Triple Protección Día x16', price: 6900, category: 'higiene' },
            { name: 'Preservativos Prime Super Finos x3', price: 4100, category: 'farmacia' },
            { name: 'Preservativos Prime Warming x3', price: 4100, category: 'farmacia' },
            { name: 'Preservativos Prime Tachas x3', price: 4100, category: 'farmacia' },
            { name: 'Preservativos Prime Texturados x3', price: 4100, category: 'farmacia' },
            { name: 'Preservativos Prime Stronger x3', price: 4100, category: 'farmacia' },
            { name: 'Preservativos Prime Espermicida x3', price: 4500, category: 'farmacia' },
            { name: 'Preservativos Prime Extra Lubricado x3', price: 4900, category: 'farmacia' },
            { name: 'Preservativos Tulipán Súper Fino', price: 3200, category: 'farmacia' },
            { name: 'Preservativos Tulipán Ultra Resistente', price: 3200, category: 'farmacia' },
            { name: 'Preservativos Tulipán Texturados', price: 3200, category: 'farmacia' },
            { name: 'Preservativos Tulipán Ultrafino', price: 3200, category: 'farmacia' },
            // Helado y Hielo
            { name: 'Cassata Grido x8', price: 11900, category: 'helados' },
            { name: 'Bombón Crocante x8', price: 14300, category: 'helados' },
            { name: 'Bombón Escocés x8', price: 15900, category: 'helados' },
            { name: 'Torta helada frutilla Grido', price: 18000, category: 'helados' },
            { name: 'Palito bombón x10', price: 8500, category: 'helados' },
            { name: 'Palito frutal limón x20', price: 15500, category: 'helados' },
            { name: 'Palito frutal frutilla x20', price: 15500, category: 'helados' },
            { name: 'Palito frutal naranja x20', price: 15500, category: 'helados' },
            { name: 'Bolsa de hielo 4 kg', price: 5000, category: 'hielo' },
            // Varios
            { name: 'Alikal x1 unidad', price: 1050, category: 'farmacia' }
        ],
        schedule: {
            lunes: '18:00 - 23:00',
            martes: '18:00 - 23:00',
            miercoles: '18:00 - 23:00',
            jueves: '18:00 - 23:55',
            viernes: '18:00 - 23:55',
            sabado: '12:00 - 23:55',
            domingo: '12:00 - 22:00'
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
                window.location.href = `menus/menu-${item.id}.html`;
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
                window.location.href = `menus/menu-${result.restaurantId}.html`;
            });
        }

        container.appendChild(div);
    });
}

// Function to check if a restaurant is currently open
function isRestaurantOpen(schedule) {
    if (!schedule) return null; // No schedule available

    const now = new Date();
    const dayNames = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    const currentDay = dayNames[now.getDay()];
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Time in minutes

    const daySchedule = schedule[currentDay];
    if (!daySchedule || daySchedule === 'Cerrado') {
        return false;
    }

    // Parse time range like "09:00 - 18:00"
    const [openTime, closeTime] = daySchedule.split(' - ');
    if (!openTime || !closeTime) return false;

    const [openHour, openMin] = openTime.split(':').map(Number);
    const [closeHour, closeMin] = closeTime.split(':').map(Number);

    const openMinutes = openHour * 60 + openMin;
    const closeMinutes = closeHour * 60 + closeMin;

    return currentTime >= openMinutes && currentTime <= closeMinutes;
}

// Function to get restaurant status text
function getRestaurantStatus(schedule) {
    if (!schedule) return 'Horario no disponible';
    const isOpen = isRestaurantOpen(schedule);
    return isOpen ? 'Abierto ahora' : 'Cerrado';
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
                    case 'best-rated':
                        // Sort by rating desc (changed from 'famous')
                        filtered.sort((a, b) => b.rating - a.rating);
                        break;
                    case 'promo':
                        // Filter by hasPromo
                        filtered = filtered.filter(item => item.hasPromo);
                        break;
                    case 'open':
                        // Filter only open restaurants
                        filtered = filtered.filter(item => isRestaurantOpen(item.schedule) === true);
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
            window.location.href = `menus/menu-${item.id}.html`;
        };
        card.addEventListener('click', goToMenu);

        // Get status
        const status = getRestaurantStatus(item.schedule);
        const isOpen = isRestaurantOpen(item.schedule);
        const statusClass = isOpen ? 'bg-green-500' : (item.schedule ? 'bg-gray-500' : 'bg-yellow-500');
        const statusIcon = isOpen ? 'fa-door-open' : 'fa-door-closed';

        card.innerHTML = `
            <div class="h-48 bg-cover bg-center relative" style="background-image: url('${item.img}')">
                <div class="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${statusClass} text-white">
                    <i class="fa-solid ${statusIcon}"></i>
                    ${status}
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
                <button onclick="event.stopPropagation(); window.location.href='menus/menu-${item.id}.html'" class="w-full bg-dark text-white font-bold py-3 rounded-xl group-hover:bg-primary transition-colors flex items-center justify-center gap-2 opacity-90 group-hover:opacity-100 group-hover:shadow-lg">
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
