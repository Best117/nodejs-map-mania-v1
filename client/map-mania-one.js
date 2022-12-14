var gMap;

function initMap() {
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 2});

    var loc1 = new google.maps.Marker({position:{lat:35.6860,lng:139.7685}, map:gMap});
    loc1.setIcon('http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png');

        var infoWindow1 = new google.maps.InfoWindow({content:'Tokyo, Japan'});
        loc1.addListener('click', function() {
            infoWindow1.open(gMap, loc1);
        });

    var loc2 = new google.maps.Marker({position:{lat:42.0829,lng:-85.8667}, map:gMap});
    loc2.setIcon('http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png');

        var infoWindow2 = new google.maps.InfoWindow({content:'Gravel Lake, Michigan'});
        loc2.addListener('click', function() {
            infoWindow2.open(gMap, loc2);
        });

    var loc3 = new google.maps.Marker({position:{lat:41.3505,lng:-88.8419}, map:gMap});
    loc3.setIcon('http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png');

        var infoWindow3 = new google.maps.InfoWindow({content:'Ottawa, Illinois'});
        loc3.addListener('click', function() {
            infoWindow3.open(gMap, loc3);
        });
    
    var loc4 = new google.maps.Marker({position:{lat:41.3204,lng:-88.9935}, map:gMap});
    loc4.setIcon('http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png');

        var infoWindow4 = new google.maps.InfoWindow({content:'Starved Rock State Park, Illinois'});
        loc4.addListener('click', function() {
            infoWindow4.open(gMap, loc4);
        });

    var loc5 = new google.maps.Marker({position:{lat:25.7634,lng:-80.1916}, map:gMap});
    loc5.setIcon('http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png');

        var infoWindow5 = new google.maps.InfoWindow({content:'Miami, Florida'});
        loc5.addListener('click', function() {
            infoWindow5.open(gMap, loc5);
        });

    var loc6 = new google.maps.Marker({position:{lat:46.1423,lng:-88.0940}, map:gMap});
    loc6.setIcon('http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png');

        var infoWindow6 = new google.maps.InfoWindow({content:'Channing, Michigan'});
        loc6.addListener('click', function() {
            infoWindow6.open(gMap, loc6);
        });

    var loc7 = new google.maps.Marker({position:{lat:43.6274,lng:-89.7605}, map:gMap});
    loc7.setIcon('http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png');

        var infoWindow7 = new google.maps.InfoWindow({content:'Wisconsin Dells, Wisconsin'});
        loc7.addListener('click', function() {
            infoWindow7.open(gMap, loc7);
        });

    var loc8 = new google.maps.Marker({position:{lat:30.2695,lng:-97.7441}, map:gMap});
    loc8.setIcon('http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png');

        var infoWindow8 = new google.maps.InfoWindow({content:'Austin, Texas'});
        loc8.addListener('click', function() {
            infoWindow8.open(gMap, loc8);
        });

    var loc9 = new google.maps.Marker({position:{lat:41.6055,lng:-88.0783}, map:gMap});
    loc9.setIcon('http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png');
    
        var infoWindow9 = new google.maps.InfoWindow({content:'Lewis University, Illinois'});
        loc9.addListener('click', function() {
            infoWindow9.open(gMap, loc9);
        });
    var loc10 = new google.maps.Marker({position:{lat:41.8758,lng:-87.6242}, map:gMap});
    loc10.setIcon('http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png');
        
        var infoWindow10 = new google.maps.InfoWindow({content:'Chicago, Illinois'});
        loc10.addListener('click', function() {
            infoWindow10.open(gMap, loc10);
        });

    google.maps.event.addListener(gMap,'idle', function() {
        updateGame()
    });
}

function updateGame() {
    console.log('function updateGame() google-maps-step-03!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    if (gMap.getBounds().contains({lat:35.6860,lng:139.7685})) { //loc1
        inBounds = true;
    }
    if (gMap.getBounds().contains({lat:42.0829,lng:-85.8667})) { //loc2
        inBounds = true;
    }
    if (gMap.getBounds().contains({lat:41.3505,lng:-88.8419})) { //loc3
        inBounds = true;
    }
    if (gMap.getBounds().contains({lat:41.3204,lng:-88.9935})) { //loc4
        inBounds = true;
    }
    if (gMap.getBounds().contains({lat:25.7634,lng:-80.1916})) { //loc5
        inBounds = true;
    }
    if (gMap.getBounds().contains({lat:46.1423,lng:-88.0940})) { //loc6
        inBounds = true;
    }
    if (gMap.getBounds().contains({lat:43.6274,lng:-89.7605})) { //loc7
        inBounds = true;
    }
    if (gMap.getBounds().contains({lat:30.2695,lng:-97.7441})) { //loc8
        inBounds = true;
    }
    if (gMap.getBounds().contains({lat:41.6055,lng:-88.0783})) { //loc9
        inBounds = true;
    }
    if (gMap.getBounds().contains({lat:41.8758,lng:-87.6242})) { //loc10
        inBounds = true;
    }

    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}

function initApplication() {
    console.log('Map Mania: My 10 Favorite Locations Has Begun!');
}