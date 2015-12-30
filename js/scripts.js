
$(document).ready(function(){/* smooth scrolling for scroll to top */
/* smooth scrolling for scroll down */
$('.scroll-down').click(function(){
  $('body,html').animate({scrollTop:$('#sec1').offset().top-50}, 1000);
})
/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#navbar' })
});