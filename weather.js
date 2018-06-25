if (navigator.geolocation) {				
 navigator.geolocation.getCurrentPosition(showPosition);
} else {
 alert('Geolocation is not supported in your browser');
}

function showPosition(position) {
  var api = "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;

  $.getJSON(api, function(data){
    // Getting Weather Details
    $("#place").html(data.name + ", " + data.sys.country);
    $("#celsius").html(data.main.temp.toFixed(1) + "°C");
    $("#temp").html(data.main.temp.toFixed(1));
    $("#description").html(data.weather[0].description);
    
    
    
    // Weather Icon Conditions
    var icon = data.currently.icon;
    var icons = new Skycons({"color": " #4c4934"});
           
           
          switch (icon) {
             case "partly-cloudy-night":
              icons.set("icon", Skycons.PARTLY_CLOUDY_NIGHT);
               icons.play();
                break;
              
              case "clear-day":
             // console.log(icon);
               icons.set("icon", Skycons.CLEAR_DAY);
               icons.play();
                break;
              
              case "clear-night":
             // console.log(icon);
              icons.set("icon", Skycons.CLEAR_NIGHT);
               icons.play();
                break;
              
              case "rain":
              //console.log(icon);
                icons.set("icon", Skycons.RAIN);
               icons.play();
                break;
              
              case "snow":
              //console.log(icon);
               icons.set("icon", Skycons.SNOW);
               icons.play();
                break;
              
              case "sleet":
              //console.log(sleet);
                icons.set("icon", Skycons.SLEET);
               icons.play();
                break;
              
              case "wind":
              //console.log(icon);
                icons.set("icon", Skycons.WIND);
               icons.play();
                break;
              
              case "fog":
              //console.log(icon);
               icons.set("icon", Skycons.FOG);
               icons.play();
                break;
              
              case "cloudy":
              //console.log(icon);
               icons.set("icon", Skycons.CLOUDY);
               icons.play();
                break;
                       
              case "partly-cloudy-day":
              //console.log(icon);
               icons.set("icon", Skycons.PARTLY_CLOUDY_DAY);
               icons.play();
                break;
              }
  });
}

// Temperature Conversion
function getFahrenheit() {
  $("#btnCelsius").css("color", "#2d314a");
  $("#btnFahrenheit").css("color", "#fff");
  $("#btnCelsius").prop("disabled", false);
  $("#btnFahrenheit").prop("disabled", true);
  
  $("#temp").html(((parseInt($("#temp").text()) * 1.8) + 32).toFixed(1));
}
                                           
function getCelsius() {
  $("#btnCelsius").css("color", "#fff");
  $("#btnFahrenheit").css("color", "#2d314a");
  $("#btnCelsius").prop("disabled", true);
  $("#btnFahrenheit").prop("disabled", false);
  
  $("#temp").html(Math.round((parseInt($("#temp").text()) - 32)/ 1.8).toFixed(1));
}
