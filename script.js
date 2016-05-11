(function(){
  startMovements();
  colorPicker();
})();

function startMovements(){
  $('.lock_tongue').click(function() {
    $('.tongue').toggleClass('open_tongue');
  });
  $('.lock_eyes').click(function() {
    $('.eye').toggleClass('close_eyes');
    $('.eyeball').toggleClass('close_eyeballs');
  });
  $('.lock_pinta').click(function() {
    alert("ERRO, A PINTA NÃO PODE SER RETIRADA");
  });
  $('.lock_right_arm_up').click(function() {
    $('.right_arm').toggleClass('arm_right_is_up');
  });
  $('.lock_left_arm_up').click(function() {
    $('.left_arm').toggleClass('arm_left_is_up');
  });
}

function colorPicker(){
  $('#shirtcolor').change(function(){
    $('.shirt_main, .left_sleeve, .right_sleeve').css('background-color', $(this).val());
  });
}
