var campos_max = 10;   //max de 10 campos
var x = 2;
// input radio para selecionar una sola respuesta
$('#add_field').click(
    function (e) {
        e.preventDefault();
        if (x < campos_max) {
            $('#listas').append('<div class="row">\
                                <div class="col-md-10">\
                                   <input type="text" name="response" placeholder="Respuesta '+ x + '"  class="form-control input" required>\
                                   <input type = "radio" name = "preg1" value = "" />Seleccionada\
                                </div>\
                                <a href="#" class="remover_campo"><img src="/images/icons/delete.png" ></a>\
                            </div>');
            x++;
        }
    }
);
$('#listas').on("click", ".remover_campo", function (e) {
    e.preventDefault();
    $(this).parent('div').remove();
    x--;
});