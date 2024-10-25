// ========================== Menu Toggle JS ==========================
// Menu Js
$('ul.slimmenu').slimmenu({
    resizeWidth: '1024',
    collapserTitle: 'MENU',
    easingEffect:'easeInOutQuint',
    animSpeed:'medium',
    indentChildren: true,
    childrenIndenter: '&raquo;'
});


$(document).ready(function () {
  $('.collapse-button').on('click', function () {
    $('body').toggleClass('body-fixed');
    $('.collapse-button').toggleClass('open');
    $('.slimmenu').toggleClass('show-nav');
  });
});



// Owl Carousel Js
$(document).ready(function () {
	$('#our_client_logo_scrl').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		dots:false,
		autoplay:true,
		smartSpeed:2000,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		singleItem: true,
		responsive:{
			0:{
			items:1
			},
			480:{
			items:2
			},
			767:{
			items:3
			},
			1024:{
			items:4
			}
		}
	});

});




document.addEventListener('DOMContentLoaded', function () {
  // Récupère tous les éléments avec la classe 'icon-embed-small'
  var icons = document.querySelectorAll('.icon-embed-small');

  // Ajoute un écouteur d'événement de clic à chaque icône
  icons.forEach(function (icon) {
	icon.addEventListener('click', function () {
	  // Récupère l'élément parent qui contient la description
	  var headerWrapper = icon.closest('.faq_component-header-wrapper');
	  var descriptionWrapper = headerWrapper.nextElementSibling;

	  // Change la hauteur de la description pour la dérouler ou l'enrouler
	  if (descriptionWrapper.style.height === '0px' || !descriptionWrapper.style
		.height) {
		descriptionWrapper.style.height = descriptionWrapper.scrollHeight + 'px';
		descriptionWrapper.classList.add('open');
	  } else {
		descriptionWrapper.style.height = '0px';
		descriptionWrapper.classList.remove('open');
	  }
	});
  });
});
