$(function(){
  $('#purple').click(function(){
    if ($('#purple').is(':checked')){
      $('.bg').css('transform','translate(0px)');
      $('.active').css('transform','translate(-80px)');
    }
  });
  $('#blue').click(function(){
    if ($('#blue').is(':checked')){
      $('.bg').css('transform','translate(-550px)');
      $('.active').css('transform','translate(0px)');
    }
  });
  $('#green').click(function(){
    if ($('#green').is(':checked')){
      $('.bg').css('transform','translate(-1100px)');
      $('.active').css('transform','translate(80px)');
    }
  });
});
