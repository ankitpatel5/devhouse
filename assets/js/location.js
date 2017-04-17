(function () {
    var centerLatLng = new google.maps.LatLng(30.260363,-97.737490);

    var devHouseLatLng = new google.maps.LatLng(30.278419,-97.72153);
    var hackReactorLatLng = new google.maps.LatLng(30.270070,-97.741012);
    var galvanizeLatLng = new google.maps.LatLng(30.265557,-97.749699);
    var universityOfTexasCodingSchoolLatLng = new google.maps.LatLng(30.284046,-97.725534);
    var generalAssemblyLatLng = new google.maps.LatLng(30.268598,-97.743000);
    var theIronYardLatLng = new google.maps.LatLng(30.226851,-97.758195);
    var devBootCampLatLng = new google.maps.LatLng(30.279961,-97.741867);

    var mapOptions = {
      zoom: 13,
      center: centerLatLng
    }
    var map = new google.maps.Map(document.getElementById("dev-map"), mapOptions);

    var devHouseMarker = new google.maps.Marker({
        position: devHouseLatLng,
        map: map,
        title:"devHouse"
    });

    var hackReactorMarker = new google.maps.Marker({
        position: hackReactorLatLng,
        map: map,
        title:"Hack Reactor",
        icon: "assets/mineimages/map-small-hr.png"
    });

    var galvanizeMarker = new google.maps.Marker({
        position: galvanizeLatLng,
        map: map,
        title:"galvanize",
        icon: "assets/mineimages/galvanizePin-small.png"
    });

    var universityOfTexasCodingSchoolMarker = new google.maps.Marker({
        position: universityOfTexasCodingSchoolLatLng,
        map: map,
        title:"universityOfTexasCodingSchool",
        icon: "assets/mineimages/utPin-small.png"
    });

    var generalAssemblyMarker = new google.maps.Marker({
        position: generalAssemblyLatLng,
        map: map,
        title:"generalAssembly",
        icon: "assets/mineimages/genAssemblyPin-small.png"
    });

    var theIronYardMarker = new google.maps.Marker({
        position: theIronYardLatLng,
        map: map,
        title:"theIronYard",
        icon: "assets/mineimages/ironyardPin-small.png"
    });

    var devBootCampMarker = new google.maps.Marker({
        position: devBootCampLatLng,
        map: map,
        title:"Dev Bootcamp",
        icon: "assets/mineimages/map-small-dbc.png"
    });

})();