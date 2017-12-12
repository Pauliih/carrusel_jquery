$(document).ready(function(){
  var imgItems = $('#slider li').length; // para ver el n° de slides

  for (var i = 1; i <= imgItems; i++) { // Por cada imagen pondrá un circulo
    $('.move').append('<li><span class="fa fa-circle"></span></li>')
  }

  /* Esto hará
  <li><span class="fa fa-circle"></span></li>
  <li><span class="fa fa-circle"></span></li>
  <li><span class="fa fa-circle"></span></li>
  <li><span class="fa fa-circle"></span></li>
  */

  $('#slider li').hide(); // Oculta todas las imagenes
  $('#slider li:first').show(); // Muestra la primera imagen

  $('.move li:first').css({'color': '#fff'}); // le da css al primer circulo

  // Ejecuta las funciones
  $('.move li').click(move);

  /* Agregar las funciones de las flechas
  $('.right span').click(nextSlider);
  $('.left span').click(prevSlider);
  */

  //Función para selecionar las imagenes
  function move(){
    var movePos = $(this).index() + 1; // Posicion de la paginacion seleccionada

    $('#slider li').hide(); // Oculta los slides
    $('#slider li:nth-child('+ movePos +')').fadeIn(); // Muestra el Slide seleccionado

    // Le doy estilos a la paginacion que seleccioné
    $('.move li').css({'color': '#2AB7A9'});
    $(this).css({'color': '#fff'});

    imgPos = movePos;
  }

  /* HACER FUNCIONAR LAS FLECHAS
  function nextSlider(){

  }

  function prevSlider(){

  }
  */
});