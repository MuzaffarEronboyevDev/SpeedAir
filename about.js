// Daly City map
var mapDaly = L.map('map-dalycity').setView([37.703091, -122.486283], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mapDaly);
L.marker([37.703091, -122.486283]).addTo(mapDaly)
    .bindPopup('27 Northgate Ave, Daly City, CA 94015');

// Tashkent map (Seoul Plaza, Tashkent, Uzbekistan)
var mapTashkent = L.map('map-tashkent').setView([41.305322, 69.283051], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mapTashkent);
L.marker([41.305322, 69.283051]).addTo(mapTashkent)
    .bindPopup('Seoul Plaza, Tashkent, Uzbekistan');
// Language Switcher logic (reuse from index.html)

document.getElementById('find-location').onclick = function () {
    if (!navigator.geolocation) {
        document.getElementById('map-container').innerHTML = "Geolocation is not supported by your browser.";
        return;
    }
    document.getElementById('map-container').innerHTML = "Locating...";
    navigator.geolocation.getCurrentPosition(function (pos) {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lon-0.01},${lat-0.01},${lon+0.01},${lat+0.01}&layer=mapnik&marker=${lat},${lon}`;
        document.getElementById('map-container').innerHTML =
            `<iframe width="100%" height="320" frameborder="0" src="${mapUrl}" style="border-radius:8px;"></iframe>
                     <div style="margin-top:8px;"><a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=16/${lat}/${lon}" target="_blank" style="color:#056fcc;">View Larger Map</a></div>`;
    }, function () {
        document.getElementById('map-container').innerHTML = "Unable to retrieve your location.";
    });
};