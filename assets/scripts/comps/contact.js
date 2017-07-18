
var footerOffsetBlock=true;  

$(document).ready(function() {

	$('body').on('mousewheel', function(event) {
		
        footerOffset(event);

	});
 	 
});  
 
function footerOffset(event) { 

 
    if(event.deltaY==-1&& $("section:last").hasClass('active')){            
             
        
            if(!footerOffsetBlock){   
                
                footerOffsetBlock=false;
                footerOffsetShow(true); 

            }; 
              
        }
        else if(event.deltaY==1&& $("section:last").hasClass('active')){
        
            footerOffsetShow(false);       
 
        }; 

}         

function footerOffsetShow(show){ 

	if(show){ 

		$("section:last").addClass('active-footer');

        setTimeout(function(){
            footerOffsetShow(false);}
        ,1000);

	}else{
		 
		$("section:last").removeClass('active-footer');
	};

	return;
};

 
function pageOffsetShowBlock(){ 
    footerOffsetBlock=true;

    setTimeout(function(){
        footerOffsetBlock=false;  
    },1000);
     
}   