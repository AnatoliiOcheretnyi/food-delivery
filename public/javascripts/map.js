function initMap(){
    var pos = {lat: 49.227182, lng: 28.407935};
    var opt = {
        center: pos,
        zoom: 15,
        styles: style
    }

    var map = new google.maps.Map(document.getElementById("map"), opt);

    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        animation: google.maps.Animation.DROP,
        title: "Натисни на мене"
      });

      var info = new google.maps.InfoWindow({
        content: '<h3> Найкраща доставка Вінииці <br> Food Delivery</h3> <p>30хв і ви ситі</p>'
      });

      marker.addListener("click", function(){
          info.open(map, marker);
      })
}