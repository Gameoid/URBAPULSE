// Map Initialization
const map = L.map('map', { zoomControl: false }).setView([28.4089, 77.3178], 13); 

// FIXED: Using CartoDB Voyager tiles (Avoids the 403 Access Blocked error)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap, © CARTO'
}).addTo(map);

// Zoom controls
document.getElementById('zoomIn').onclick = () => map.zoomIn();
document.getElementById('zoomOut').onclick = () => map.zoomOut();

const geocoder = L.Control.Geocoder.nominatim();