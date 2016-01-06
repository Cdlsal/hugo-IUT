
$(document).ready(function(){

	/* Scrol auto au clic */
	$('.scroll-down').click(function(){
		$('body,html').animate({scrollTop:$('#sec1').offset().top-50}, 1000);
	});

	$('#artist-button').click(function(){
		$('body,html').animate({scrollTop:$('#sec1').offset().top-50}, 1000);
	});

	$('#ticket-button').click(function(){
		$('body,html').animate({scrollTop:$('#sec3').offset().top-50}, 1000);
	});

	/* Artist audio hover */
	$('.background-artist').find('.audio').hide();

	$('.background-artist').hover(function() {
		$(this).find('.infos').hide();
		$(this).find('.audio').show();
	}, function() {
		$(this).find('.audio').hide();
		$(this).find('.infos').show();
	});

	/* Artist music */
	var audio1 = document.createElement('audio');
	var audio2 = document.createElement('audio');
	var audio3 = document.createElement('audio');
	var audio4 = document.createElement('audio');
    var audio5 = document.createElement('audio');
    var audio6 = document.createElement('audio');
    var audio7 = document.createElement('audio');
    var audio8 = document.createElement('audio');
    var audio9 = document.createElement('audio');
	var audio10 = document.createElement('audio');
	var audio11 = document.createElement('audio');
	var audio12 = document.createElement('audio');

	audio1.setAttribute('src', 'audio/Arve Henriksen - Ascent.mp3');
	audio2.setAttribute('src', 'audio/GlimpseOfLight.mp3');
	audio3.setAttribute('src', 'audio/Miss Tati – Shakedown.mp3');
	audio4.setAttribute('src', 'audio/from Slow Eastbound Train by Daniel Herskedal.mp3');
    audio5.setAttribute('src', 'audio/Snorre Bjerck, Drumsolo Live.mp3'); 
    audio6.setAttribute('src', 'audio/Mamadou Diabaté dit DG - 2015.mp3'); 
    audio7.setAttribute('src', 'audio/GlimpseOfLight.mp3');
    audio8.setAttribute('src', 'audio/Shan Qi- Helge A. Norbakken, Moods.mp3');
    audio9.setAttribute('src', 'audio/Martin Halla  Illuminate The Sky.mp3');
	audio10.setAttribute('src', 'audio/Trio Mediaeval Nomemus.mp3');
	audio11.setAttribute('src', 'audio/GlimpseOfLight.mp3');
	audio12.setAttribute('src', 'audio/Ivar Kolve trio w- symph.orchestra.mp3');

	audio1.addEventListener("load", function() {audio1.play();}, true);
	audio2.addEventListener("load", function() {audio2.play();}, true);
	audio3.addEventListener("load", function() {audio3.play();}, true);
	audio4.addEventListener("load", function() {audio4.play();}, true);
    audio5.addEventListener("load", function() {audio5.play();}, true);
    audio6.addEventListener("load", function() {audio6.play();}, true);
    audio7.addEventListener("load", function() {audio7.play();}, true);
    audio8.addEventListener("load", function() {audio8.play();}, true);
    audio9.addEventListener("load", function() {audio9.play();}, true);
	audio10.addEventListener("load", function() {audio10.play();}, true);
	audio11.addEventListener("load", function() {audio11.play();}, true);
	audio12.addEventListener("load", function() {audio12.play();}, true);


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

	/* Highlight the top nav as scrolling occurs */
	$('body').scrollspy({ target: '#navbar' });

	/* Parrallax effect */
	$('.parallax').parallax();


	/* Performance times, select effect */

    // Hide Text Area
    $('#saturday, #sunday').hide();

   // Toggle for timeline click
   $('.timeline-day').click(function(){
   	$('#friday, #saturday, #sunday').hide();
   	$('.active').removeClass('active');
   	var day = $(this).attr("day");
   	eval("$('#"+ day +"').fadeIn();");
   	$(this).addClass('active');
   });
 });
