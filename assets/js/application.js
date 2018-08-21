$(document).ready(function() {
  /* hide the loader on ready state of DOM */
  if ($('#loader')) {
    $('#loader').hide();
  }
  // set carousel interval
  $('.carousel').carousel({
    interval: 2000
  });
});