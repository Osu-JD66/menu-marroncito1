const magazine = document.querySelector('.magazine');
const pages = document.querySelectorAll('.page');

let currentPage = 0;

function updatePages() {
    pages.forEach((page, index) => {
        page.classList.remove('active', 'previous', 'next', 'hidden');
        if (index < currentPage) {
            page.classList.add('previous'); // Página volteada hacia atrás
        } else if (index === currentPage) {
            page.classList.add('active'); // Página actual
        } else {
            page.classList.add('next'); // Página lista para ser volteada
        }
    });
}

magazine.addEventListener('click', (e) => {
    const { clientX } = e;
    const magazineWidth = magazine.offsetWidth;
    const magazineLeft = magazine.getBoundingClientRect().left;

    if (clientX < magazineLeft + magazineWidth / 2) {
        // Clic en la izquierda: retroceder
        if (currentPage > 0) {
            currentPage--;
        }
    } else {
        // Clic en la derecha: avanzar
        if (currentPage < pages.length - 1) {
            currentPage++;
        }
    }

    updatePages();
});

// Mostrar la primera página al cargar
updatePages();
