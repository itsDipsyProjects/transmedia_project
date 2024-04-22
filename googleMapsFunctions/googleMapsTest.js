let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 37.4239163, lng: -122.0947209 },
    zoom: 8,
  });

  let marker = new google.maps.Marker({
    position: {lat: 37.52, lng: -122.0947209},
    map,
    title: "Hello World!",
  });

  marker.setMap(map);
}

initMap()