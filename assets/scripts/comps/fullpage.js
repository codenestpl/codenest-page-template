//Full Page

var $fullpageSections;

$(document).ready(function() { 

	$fullpageSections=$("#fullpage .section");

	$('#fullpage').fullpage({ 
		//Navigation
		menu: 'nav',
		lockAnchors: false,
		anchors:generateAnchors(),
		navigation: true,
		navigationPosition: 'left',
		navigationTooltips: generateAnchorsTitles(),
		showActiveTooltip: false, 
		slidesNavigation: false,

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic', 
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false, 
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: true, 
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null, 

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		fixedElements: 'header, footer, #sidemenu, #sidemenu-toggle-bar, #loader',
		responsiveWidth: 0, 
		responsiveHeight: 0,
		responsiveSlides: false, 

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide-fullpage',

		lazyLoading: false, 

		//events
		onLeave: function(index, nextIndex, direction){ 
			activeSection=nextIndex;
			animationDirection(direction); 
			pageOffsetShowBlock();			
		},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}

	 
	});
});

 

function generateAnchors(){

	var anchors=[]
	$fullpageSections.each(function() {
		
		anchors.push($(this).attr('id').replace("-section",""));

	});
  
	return anchors;
};

function generateAnchorsTitles(){

	var anchorsTitles=[]
	$fullpageSections.each(function() {
		
		anchorsTitles.push($(this).attr('section-heading')); 

	});
 	 
	return anchorsTitles;
};

function animationDirection(direction){

	$("body").removeClass('up').removeClass('down').addClass(direction);
 
	return; 
};