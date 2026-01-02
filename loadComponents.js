// Component Loader for Static Site
// Loads header.html and footer.html into pages

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    // initDownloadDropdown and others will be called after header loads
});

function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) return;

    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            headerPlaceholder.innerHTML = html.trim();
            // Initialize components that depend on header content
            initMobileMenu();
            initDownloadDropdown();
            highlightActiveNav();
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
}

function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;

    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            footerPlaceholder.innerHTML = html.trim();
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
}

function initMobileMenu() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

function initDownloadDropdown() {
    // Desktop dropdown (header)
    const downloadBtn = document.getElementById('download-btn');
    const downloadDropdown = document.getElementById('download-dropdown');

    if (downloadBtn && downloadDropdown) {
        downloadBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            downloadDropdown.classList.toggle('hidden');
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!downloadBtn.contains(e.target) && !downloadDropdown.contains(e.target)) {
                downloadDropdown.classList.add('hidden');
            }
        });
    }

    // Mobile dropdown (header)
    const mobileDownloadBtn = document.getElementById('mobile-download-btn');
    const mobileDownloadDropdown = document.getElementById('mobile-download-dropdown');
    const mobileDownloadIcon = document.getElementById('mobile-download-icon');

    if (mobileDownloadBtn && mobileDownloadDropdown) {
        mobileDownloadBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileDownloadDropdown.classList.toggle('hidden');
            if (mobileDownloadIcon) {
                mobileDownloadIcon.classList.toggle('fa-chevron-down');
                mobileDownloadIcon.classList.toggle('fa-chevron-up');
            }
        });
    }

    // Repartidor dropdown
    const repartidorBtn = document.getElementById('repartidor-download-btn');
    const repartidorDropdown = document.getElementById('repartidor-download-dropdown');

    if (repartidorBtn && repartidorDropdown) {
        repartidorBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            repartidorDropdown.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!repartidorBtn.contains(e.target) && !repartidorDropdown.contains(e.target)) {
                repartidorDropdown.classList.add('hidden');
            }
        });
    }

    // Menu dropdown (restaurant pages)
    const menuBtn = document.getElementById('menu-download-btn');
    const menuDropdown = document.getElementById('menu-download-dropdown');

    if (menuBtn && menuDropdown) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            menuDropdown.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !menuDropdown.contains(e.target)) {
                menuDropdown.classList.add('hidden');
            }
        });
    }
}

function highlightActiveNav() {
    // Get current page from pathname
    const pathname = window.location.pathname;
    const currentPage = pathname.split('/').pop() || 'index.html';

    // Remove active class from all nav items
    document.querySelectorAll('[id^="nav-"]').forEach(nav => {
        nav.classList.remove('text-white', 'font-bold');
        nav.classList.remove('after:content-[\'\']', 'after:absolute', 'after:-bottom-1', 'after:left-0', 'after:w-full', 'after:h-0.5', 'after:bg-white');
        nav.classList.add('hover:text-gray-200');
    });

    // Add active class based on current page
    const navMap = {
        'index.html': 'nav-inicio',
        'nosotros.html': 'nav-nosotros',
        'restaurantes.html': 'nav-comercios',
        'repartidores.html': 'nav-repartidores',
        'contacto.html': 'nav-contacto'
    };

    const activeNavId = navMap[currentPage];
    if (activeNavId) {
        const activeNav = document.getElementById(activeNavId);
        if (activeNav) {
            activeNav.classList.add('text-white', 'font-bold', 'relative');
            activeNav.classList.add('after:content-[\'\']', 'after:absolute', 'after:-bottom-1', 'after:left-0', 'after:w-full', 'after:h-0.5', 'after:bg-white');
            activeNav.classList.remove('hover:text-gray-200');
        }
    }
}

