 /*
*
* Sidemenu functions
*
*/
var contactForm;

$('.contactform-open').click(function() {

    contactFormActions();
    return ; 

});

$('#contact-form .sidemenu-button-box').click(function() {

    contactFormActions();
    return ; 

});

function contactFormActions() {  

    contactForm.toggle();
    $("body").toggleClass('sidemenu-active'); 

    setTimeout(function(){
        $("body").toggleClass('icon-anim');  
    },700);

    return false; 
}

$(document).ready(function() {

     contactForm = $('#contact-form').scotchPanel({
        containerSelector: 'main', 
        direction: 'bottom',  
        duration: 700,
        transition: 'ease',
        distanceX: sideMenuDistanceY(), 
        enableEscapeKey: true
    });  

    inputEmpty();
    sendMail();
}); 

 
function sideMenuDistanceY() {
  
    distanceX= Math.min($('#contact-form').width(), $(window).height()); 

    return distanceX+"px"; 
};

function inputEmpty() {
   
    $('#contact-form input').on('focusout',  function(event) {
        event.preventDefault();
        
        if($(this).val().length != 0) {
            $(this).parents('.form-group').removeClass('empty');
        }else{
            $(this).parents('.form-group').addClass('empty');
        };

    });

    $('#contact-form input').on('focusin',  function(event) {
        event.preventDefault();
        
        $(this).parents('.form-group').removeClass('empty');

    });

};

function sendMail(){
     $("#contact-form form").submit(function(event) {

      event.preventDefault();

      $('.send-button').addClass('sending');

      var $form = $( this ),
          url = $form.attr( 'action' );

      
      var posting = $.post( url, 
        { 
            name: $('#name').val(), 
            email: $('#email').val(),
            phone: $('#phone').val(),
            message: $('#message').val(), 
        } );

      
      posting.done(function( data ) {        
        $('.send-button').removeClass('sending').addClass('sended');
      });

    });
};