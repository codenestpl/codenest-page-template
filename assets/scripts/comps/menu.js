/*
*
* Sidemenu functions
*
*/
var sidemenu;

$('#sidemenu-toggle-bar').click(function() {

	sideMenuActions();
    return ; 

});

function sideMenuActions() {  

    sidemenu.toggle();
    $("body").toggleClass('sidemenu-active'); 

    setTimeout(function(){
        $("body").toggleClass('icon-anim');  
    },700);

    return false; 
}

$(document).ready(function() {
    sidemenu = $('#sidemenu').scotchPanel({
        containerSelector: 'body',
        direction: 'right',  
        duration: 700,
        transition: 'ease',
        distanceX: sideMenuDistanceX(), 
        enableEscapeKey: true
    }); 
}); 

 
function sideMenuDistanceX() {
  
    distanceX= Math.min($('#sidemenu').width(), $(window).width() - $("#sidemenu-toggle-bar").width()); 

    return distanceX+"px"; 
};
