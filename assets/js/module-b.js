// $(document).ready(function() {
//     //Capturamos el evento y se ha cargado correctamente Jquery
console.log("Hello Worl Jquery");
//recogemos el id box para realizar el evento mouseover y capturamos el evento hover
var _box = $(".card-deck");
_box.mouseover(function() {
    $(this).css("background", "yellow");
});