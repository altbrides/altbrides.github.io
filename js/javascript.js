//= require_tree .
var container = document.querySelector('#container');
var pckry = new Packery( container, {
  // options
  itemSelector: '.item',
  gutter: 10
});

$(function(){

  $('#services').waypoint(function() {
    $('#nav .span1.services').addClass('selected').siblings().removeClass('selected');
  });
  $('#portfolio').waypoint(function() {
    $('#nav .span1.portfolio').addClass('selected').siblings().removeClass('selected');
  });
  $('#about').waypoint(function() {
    $('#nav .span1.about').addClass('selected').siblings().removeClass('selected');
  });
  $('#contact').waypoint(function() {
    $('#nav .span1.contact').addClass('selected').siblings().removeClass('selected');
  });
  $('#top').waypoint(function() {
    $('#nav .span1').siblings().removeClass('selected');
  });



  $('#nav a').smoothScroll({
    speed: 1000
  });

  var detect = function(){

    var scroller = $(document).scrollTop()

    if(scroller > 60){
      $('#nav').addClass('sticky');
    }else{
      $('#nav').removeClass('sticky');
    };

  }

  var scroll_animation = function(){

    $('#nav .container-fluid .row-fluid .span1').click(function(){
      $(this).addClass('selected');
      $(this).siblings().removeClass('selected');
    });

    $('#nav .container-fluid .row-fluid .span2').click(function(){
      $('#nav .container-fluid .row-fluid .span1').siblings().removeClass('selected');
    })

  }

  $('.slideshow').cycle({
    speed:240,
    timeout:2600
  })
  $('.item.hero .slideshow').cycle({
    speed:240,
    timeout:2200
  })

  $(document).scroll(detect);
  scroll_animation()
})