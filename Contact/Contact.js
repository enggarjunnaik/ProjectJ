/*var mapOptions=
{
    center: new google.maps.LatLng(38,-122),
    zoom: 12,
    mapTypeID: google.maps.mapTypeID.ROADMAP
};
var map= document.getElementById(map);
new google.maps.Map(map, mapOptions);*/

var lat1 = 37.0902;
var long1 = -95.7129;
function reply_click(clicked_id)
{
   
   if (clicked_id=="Birth Kingdom"){
        
       map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 14.6171, lng: 74.8449},
			zoom: 10
			});
   }
   if (clicked_id=="Teaching attained"){
      map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 18.5204, lng: 73.8567},
			zoom: 10
			});
   }
   if (clicked_id=="Previous endeavours"){
       map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 23.5859, lng: 58.4059},
			zoom: 10
			});
    
   }
   if (clicked_id=="Post graduate wars"){
       map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 42.886448,  lng: -78.878372},
			zoom: 10
			});
    
   }
   if (clicked_id=="Current whereabouts"){
   
		
			map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 43.0183, lng: -78.6966},
			zoom: 10
			});
		
   }

}

var map;
		function initMap() {
			map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: lat1, lng: long1},
			zoom: 2
			});
		}