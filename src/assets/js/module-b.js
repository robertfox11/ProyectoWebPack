// Exportamos funciones jQuery

export function color() {
    var _box = $(".card-deck");
    _box.mouseover(function() {
        $(this).css("background", "yellow");
    });
}