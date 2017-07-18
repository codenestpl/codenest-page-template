
document.onload = function() {

    $('.hide-section').removeClass('hide-section');
   
	$('.loader').addClass('hide');

    var video = document.getElementById("videobg-banner");
    video.play();

    setTimeout(function(){
        $('.loader').remove();
    },1200);
 	 
};  

window.onload = function() {

    var video = document.getElementById("videobg-banner");
    video.play();

    $('.hide-section').removeClass('hide-section');

    $('.loader').addClass('hide');

    setTimeout(function(){
        $('.loader').remove();
    },1200);
     
};    