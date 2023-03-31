let markers, map;

function initMap() {
    const posicion = {
        lat: -25.363,
        lng: 131.044,
    };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion,
    });

    markers = new google.maps.Marker({
        position: {
            lat: -34.66815,
            lng: -58.36871,
        },
    map,
    title: "Avellaneda",
    })
    markers = new google.maps.Marker({
        position: {
            lat: -37.99039,
            lng: -57.58950,
        },
        map,
        title: "Mar Del Plata",
    })

    markers = new google.maps.Marker({
        position: {
            lat: 25.75920,
            lng: -80.19272,
    },
    map,
    title: "Miami",
    })
}