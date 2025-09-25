let isZoomed = false;
let currentCountry = null;

document.querySelectorAll('#country-list li').forEach(item => {
    item.addEventListener('click', event => {
        const countryId = event.target.getAttribute('data-country');
        document.querySelectorAll('path').forEach(path => {
            path.classList.remove('highlight');
        });
        const countryPath = document.getElementById(countryId);
        if (countryPath) {
            countryPath.classList.add('highlight');
            zoomToCountry(countryPath);
        }
    });
});

function zoomToCountry(countryPath) {
    const svg = document.getElementById('world-map');
    if (isZoomed && currentCountry === countryPath) {
        svg.setAttribute('viewBox', '0 0 1010 666');
        isZoomed = false;
        currentCountry = null;
    } else {
        const bbox = countryPath.getBBox();
        const scale = 5;
        const width = 1010 / scale;
        const height = 666 / scale;
        const x = bbox.x + bbox.width / 2 - width / 2;
        const y = bbox.y + bbox.height / 2 - height / 2;
        svg.setAttribute('viewBox', `${x} ${y} ${width} ${height}`);
        isZoomed = true;
        currentCountry = countryPath;
    }
}