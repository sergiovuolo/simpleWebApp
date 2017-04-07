$(document).ready(function() {

  var latitudine;
  var longitudine;

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      latitudine = position.coords.latitude;
      longitudine = position.coords.longitude;
      //$("#data").html("latitude: " + latitudine + "<br>longitude: " + longitudine);

      var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitudine+'&lon='+longitudine+'&appid=b42dc3a625518050e4551f3f69b12f45&units=metric';

      $.getJSON(api, function(data) {

        var city = data.name + ", " + data.sys.country;
        //var weather = data.weather.id;
        var temp = data.main.temp | 0;
        var main = data.weather[0].main;
        var iconCode = data.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
       



        //$("#data").html("latitude: " + latitudine + "<br>longitude: " + longitudine);
        $("#city").html(city);
        $("#icon").html(main+ "<br>" +"<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $("#temp").html(temp + " °C");
      });  
    });    
  }
  
  

});