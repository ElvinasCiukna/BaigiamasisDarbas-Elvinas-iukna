// NAVBAR  
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// PASLAUGA 
document.querySelectorAll('.paslauga').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.paslauga').forEach(el => el.classList.remove('highlight'));
        item.classList.add('highlight');
    });
});

// GALERIJA
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox .close');

    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }
    });
});

// KARJERA
let activeBlock = null;  
let resetTimer = null;   

function moveToFront(clickedElement) {
    if (activeBlock === clickedElement) return;
    if (activeBlock) {
        activeBlock.classList.remove('active');
    }
    clickedElement.classList.add('active');
    activeBlock = clickedElement;
    if (resetTimer) {
        clearTimeout(resetTimer);
    }
    resetTimer = setTimeout(resetBlocks, 2000); 
}
function resetBlocks() {
    let blocks = document.querySelectorAll('.komandos-narys');
    blocks.forEach(block => {
        block.classList.remove('active');
    });
    activeBlock = null;
}

// BURGERIS
function toggleMenu() {
    const nav = document.getElementById("main-nav");
    nav.classList.toggle("active");
}
