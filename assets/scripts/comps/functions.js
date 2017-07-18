function skewPositionEach(){
	var $upperSection;
	var $lowerSection;

	$("section.section").each(function(index, el) {
		
		$lowerSection=$(this);

		if(typeof $upperSection != 'undefined'){

			skewPosition($upperSection, $lowerSection);

		};

		$upperSection=$lowerSection; 

	});
}

function skewPosition($upperSection, $lowerSection){ 

	var $upperSection=$upperSection.find(".skews-layer");
	var $lowerSection=$lowerSection.find(".skews-layer"); 

	$upperPoint=$upperSection.find(".bottom-skewed"); 
	$lowerPoint=$lowerSection.find(".top-skewed"); 

	$translationX=$upperPoint.offset().left-$lowerPoint.offset().left; 

	$lowerSection.css('left', $translationX); 

};