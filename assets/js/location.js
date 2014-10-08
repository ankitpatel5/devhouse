(function () {
    var centerLatLng = new google.maps.LatLng(30.277,-97.73);

    var devHouseLatLng = new google.maps.LatLng(30.278419,-97.72153);
    var makerSquareLatLng = new google.maps.LatLng(30.269693,-97.74252);
    var capitalFactoryLatLng = new google.maps.LatLng(30.268994,-97.740544);

    var mapOptions = {
      zoom: 15,
      center: centerLatLng
    }
    var map = new google.maps.Map(document.getElementById("dev-map"), mapOptions);

    var devHouseMarker = new google.maps.Marker({
        position: devHouseLatLng,
        map: map,
        title:"devHouse"
    });

    var makerSquareMarker = new google.maps.Marker({
        position: makerSquareLatLng,
        map: map,
        title:"makerSquare",
        icon: "assets/mineimages/mksPin-small.png"
    });

    var capitalFactoryMarker = new google.maps.Marker({
        position: capitalFactoryLatLng,
        map: map,
        title:"capitalFactory",
        icon: "assets/mineimages/capitalFactoryPin-small.png"
    });

})();