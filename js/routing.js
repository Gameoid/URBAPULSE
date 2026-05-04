let pathSegments = [];

// Helper to convert text to coordinates
function getCoords(query) {
    return new Promise((resolve, reject) => {
        geocoder.geocode(query, (results) => {
            if (results && results.length > 0) resolve(results[0].center);
            else reject("Location not found: " + query);
        });
    });
}

// Main function to draw the segmented colored path
async function drawHealthPath(start, end, isHealthMode) {
    // Clear old path
    pathSegments.forEach(layer => map.removeLayer(layer));
    pathSegments = [];

    const url = `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const coords = data.routes[0].geometry.coordinates;

        for (let i = 0; i < coords.length - 1; i++) {
            const p1 = [coords[i][1], coords[i][0]];
            const p2 = [coords[i+1][1], coords[i+1][0]];
            
            let color = "#4285F4"; // Default Blue
            if (isHealthMode) {
                const temp = BetterMapsAPI.getTempAtLocation(p1[0], p1[1]);
                if (temp > 40) color = "#ff4b2b"; // Red
                else if (temp > 35) color = "#ffa500"; // Orange
                else color = "#34a853"; // Green
            }

            const segment = L.polyline([p1, p2], {
                color: color, weight: 8, opacity: 0.9, lineJoin: 'round'
            }).addTo(map);
            pathSegments.push(segment);
        }

        map.fitBounds(L.latLngBounds(start, end), { padding: [80, 80] });
    } catch (err) {
        alert("Routing server is busy. Try 'Quick Demo' first!");
    }
}

// Button Events
document.getElementById('findRoute').onclick = async function() {
    const sTxt = document.getElementById('origin').value;
    const dTxt = document.getElementById('destination').value;
    const mode = document.getElementById('healthToggle').checked;

    if (!sTxt || !dTxt) return alert("Please enter both locations.");

    try {
        const [sCoord, dCoord] = await Promise.all([getCoords(sTxt), getCoords(dTxt)]);
        drawHealthPath(sCoord, dCoord, mode);
    } catch (e) { alert(e); }
};

document.getElementById('demoBtn').onclick = function() {
    const s = { lat: 28.4089, lng: 77.3178 }; // Sec 17
    const e = { lat: 28.3980, lng: 77.3050 }; // NIT
    drawHealthPath(s, e, document.getElementById('healthToggle').checked);
};