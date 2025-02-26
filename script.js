// Initialize the map
function initMap() {
    // Create a new map object, centered at a specific latitude and longitude
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.7128, lng: -74.0060 }, // Example: San Francisco
        zoom: 12, // Zoom level
    });

    // Add a marker to the map
    var marker = new google.maps.Marker({
        position: { lat: 40.7128, lng: -74.0060 },
        map: map,
        title: "Hello San Francisco!",
    });
}