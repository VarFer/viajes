$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
  $('.card1').click(function(){
    $('.card1').hide();
  });
  
  $('.card1').mouseleave(function(){
    $('.card1').fadeIn();
  });
  
  $('.card2').click(function(){
    $('.card2').hide();
  });
  
  $('.card2').mouseleave(function(){
    $('.card2').fadeIn();
  });
  
  $('.card3').click(function(){
    $('.card3').hide();
  });
  
  $('.card3').mouseleave(function(){
    $('.card3').fadeIn();
  });
  
  $('.card4').click(function(){
    $('.card4').hide();
  });
  
  $('.card4').mouseleave(function(){
    $('.card4').fadeIn();
  });
  
  
  $('.btn-info').click(function(){
    alert('Mensaje enviado a la agencia')
  })