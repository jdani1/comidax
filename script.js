document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const info = item.getAttribute('data-info');
        const title = item.getAttribute('data-title');
        const image = item.getAttribute('data-image');
        const precio = item.getAttribute('data-precio-euros');
        
        document.getElementById('panel-text').innerText = info;
        document.getElementById('panel-title').innerText = title;
        
        const panelImage = document.getElementById('panel-image');
        panelImage.src = image;
        panelImage.classList.add('panel-image-class');

        document.getElementById('panel-price').innerText = `€${precio}`;

        document.getElementById('panel-info').style.display = 'block';
    });
});

document.querySelector('.close-button-panel').addEventListener('click', () => {
    document.getElementById('panel-info').style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('panel-info')) {
        document.getElementById('panel-info').style.display = 'none';
    }
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
    const menuLinks = document.getElementById('menu-links');
    if (menuLinks.style.display === 'flex') {
        menuLinks.style.display = 'none';
    } else {
        menuLinks.style.display = 'flex';
    }
});