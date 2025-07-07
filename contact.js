
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