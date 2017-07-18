var isTechnologyAnimationActive=true;
var animationBlock=false;
var animationTimeout;
var animationAutomaticTimeout;


 $(document).ready(function(){ 

    $gradients = $(".gradient-animation-screen div");
    $animations = $(".animation-screen");

    animationAutomatic();
 
    $("#technology-link").on('mouseenter', function(event) {

        event.preventDefault();
         
        if(! isTechnologyAnimationActive&&!animationBlock){

            animationBlock=true;
            technologyLinkMousenter();
            isTechnologyAnimationActive=true;

        };
        
        return;
    });

     $("#service-link").on('mouseenter', function(event) {

        event.preventDefault();
 
        if(isTechnologyAnimationActive&&!animationBlock){

            animationBlock=true;
            serviceLinkMousenter();
            isTechnologyAnimationActive=false;
            
        }; 

        return;
    });


});

 function technologyLinkMousenter(){

    clearTimeout( animationTimeout);
    clearTimeout( animationAutomaticTimeout);

     $gradients.removeClass('active');
     $gradients.filter(".blue-to-green").addClass('active');
 	 
     animationTimeout= setTimeout(function(){

        $animations.removeClass('active');
        $animations.filter(".technology-animation-screen").addClass('active');

        animationBlock=false;
        animationAutomatic();
     },400);

     
 };

  function serviceLinkMousenter(){

    clearTimeout( animationTimeout);
    clearTimeout( animationAutomaticTimeout);

     $gradients.removeClass('active');
     $gradients.filter(".green-to-blue").addClass('active');
     
     animationTimeout= setTimeout(function(){

        $animations.removeClass('active');
        $animations.filter(".service-animation-screen").addClass('active');

        animationBlock=false; 
        animationAutomatic();
     },400);  

   
 }; 

 function animationAutomatic(){

    animationAutomaticTimeout= setTimeout(function(){
        

        if(! isTechnologyAnimationActive&&!animationBlock){

            technologyLinkMousenter();
            isTechnologyAnimationActive=true;

        }
        else if(isTechnologyAnimationActive&&!animationBlock){

            serviceLinkMousenter();
            isTechnologyAnimationActive=false;

        };

        animationBlock=true;

    },6000);

 };
