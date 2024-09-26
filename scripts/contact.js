ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.751173, 49.244853], // New coordinates you provided
        zoom: 16
    });

    // Adding a custom red SVG marker
    var myPlacemark = new ymaps.Placemark([55.751173, 49.244853], {
        hintContent: 'Custom Location',
        balloonContent: 'Coordinates: 55.751173, 49.244853'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '', // Marker link
        iconImageSize: [40, 40],  // Size of the icon
        iconImageOffset: [-20, -40]  // Offset to place icon correctly on the location
    });

    // Add the custom placemark to the map
    myMap.geoObjects.add(myPlacemark);
}