$(function() {
    $('body').tooltip({
        selector: '[data-toggle="tooltip"]'
    });
    $('[data-toggle="popover"]').popover();

    $('.carousel').carousel({
        interval: 7000
    });


    // aquí colocamos los eventos que podemos colcar en un modal
    $('#mi_primer_modal').on('show.bs.modal', function(e) {
        // do something...
        console.log("Se está mostrando el modal");
        $('#boton1').removeClass('btn-outline-success');
        $('#boton1').addClass('btn-primary');
        $('#boton1').prop('disabled', true);

    });



    $('#mi_primer_modal').on('shown.bs.modal', function(e) {
        // do something...
        console.log("Se está mostró el modal");
    });



    $('#mi_primer_modal').on('hide.bs.modal', function(e) {
        // do something...
        console.log("Se está ocultando el modal");
    });



    $('#mi_primer_modal').on('hidden.bs.modal', function(e) {
        // do something...
        console.log("Se ocultó el modal");
        $('#boton1').removeClass('btn-primary');
        $('#boton1').addClass('btn-outline-success');
        $('#boton1').prop('disabled', false);
    });
})