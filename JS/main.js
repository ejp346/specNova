$(document).ready(function() {

  $(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
      .fromTo("section.panel.turqoise", 1, {x: "0%"}, {x: "-70%", ease: Linear.easeNone})  // in from left
      .fromTo("section.panel.green", 1, {x: "9%"}, {x: "-43%", ease: Linear.easeNone})  

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "150%"
      })
      .setPin("#pinContainer")
      .setTween(wipeAnimation)
      //.addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  });

  $(window).scroll(function(){
    $(".title").css("opacity", 1 - $(window).scrollTop() / 250);
  });

  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 600})
          // animate color and top border in relation to scroll position
          .setTween("#animate2", {backgroundColor: "blue", width: "300px", height: "400px"}) // the tween durtion can be omitted and defaults to 1
          //.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
          .addTo(controller);
          scene.triggerHook(0);


  $(window).scroll(function () {
if ($(window).scrollTop() >= 30) {
$('.header').css('background','white');
$('.header').css('box-shadow','0 2px 8px 0 rgba(0,0,0,0.1)');
$('.scrollnav').css('display','block');
$('.restnav').css('display','none');
} else {
$('.header').css('background','transparent');
$('.header').css('box-shadow','none');
$('.scrollnav').css('display','none');
$('.restnav').css('display','block');
}
});
});

