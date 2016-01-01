
$(document).ready(function(){/* smooth scrolling for scroll to top */
/* smooth scrolling for scroll down */
$('.scroll-down').click(function(){
  $('body,html').animate({scrollTop:$('#sec1').offset().top-50}, 1000);
})

/* artist audio hover*/
$('.background-artist').find('.audio').hide();

$('.background-artist').hover(function() {
        $(this).find('.infos').hide();
        $(this).find('.audio').show();
    }, function() {
        $(this).find('.audio').hide();
        $(this).find('.infos').show();
})

/* artist music */
var audio1 = document.createElement('audio');
var audio2 = document.createElement('audio');
var audio3 = document.createElement('audio');
var audio4 = document.createElement('audio');

audio1.setAttribute('src', 'audio/GlimpseOfLight.mp3');
audio2.setAttribute('src', 'audio/GlimpseOfLight.mp3');
audio3.setAttribute('src', 'audio/GlimpseOfLight.mp3');
audio4.setAttribute('src', 'audio/GlimpseOfLight.mp3');

audio1.addEventListener("load", function() {audio1.play();}, true);
audio2.addEventListener("load", function() {audio2.play();}, true);
audio3.addEventListener("load", function() {audio3.play();}, true);
audio4.addEventListener("load", function() {audio4.play();}, true);

$('.audio').find('.pause').hide();

$('.play').click(function() {
    var id = $(this).attr("audio-file");
    eval("audio" + id + ".play()");
    $('#artist-' + id + ' .play').hide();
    $('#artist-' + id + ' .pause').show();
});

$('.pause').click(function() {
    var id = $(this).attr("audio-file");
    eval("audio" + id + ".pause()");
    $('#artist-' + id + ' .pause').hide();
    $('#artist-' + id + ' .play').show();
});

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#navbar' })

/* Parrallax effect */
$('.parallax').parallax();


/* performance times, select effect */

    // On cache la zone de texte
    $('#saturday, #sunday').hide();

   // toggle() lorsque le lien avec l'ID #toggler est cliqué
   $('.timeline-day').click(function()
  {
       $('#friday, #saturday, #sunday').hide();
       $('.active').removeClass('active');
       var day = $(this).attr("day");
       eval("$('#"+ day +"').fadeIn();");
       $(this).addClass('active');
   });
});





