var portfolioElements_l;
var portfolioElements_i=0;
var portfolioElements;

$(document).ready(function() {
	portfolioElements=$(".portfolio-item");
	portfolioElements_l=Math.ceil(portfolioElements.length/2);

	  $(".rwd-portfolio-nav > div").click(function(event) {
	  	rwdPortfolioNav($(this));
	  });
	
});  


function rwdPortfolioNav(navElement){
	
	if(navElement.hasClass('rwd-portfolio-navup')) {
		
		portfolioElements_i++;
		
		if(portfolioElements_i>portfolioElements_l){
			portfolioElements_i=0;
		};

	} else {
 
 		portfolioElements_i--;

		if(portfolioElements_i<0){p
			portfolioElements_i=portfolioElements_l;
		};

	};


	rwdPortfolioItemsToggle(portfolioElements_i);
};

function rwdPortfolioItemsToggle(i){
 
	$(".portfolio-container .portfolio-item").hide();
	$(".portfolio-container .row:first .portfolio-item").eq(i).show();
	$(".portfolio-container .row:last .portfolio-item").eq(i).show();

}