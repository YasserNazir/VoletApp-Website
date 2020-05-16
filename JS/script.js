//------------------------------------- Waiting for the entire site to load ------------------------------------------------//

jQuery(window).load(function() { 
		jQuery("#loaderInner").fadeOut(); 
		jQuery("#loader").delay(400).fadeOut("slow"); 
		$('.teaserTitle ').stop().animate({marginTop :'330px', opacity:"1"}, 1000, 'easeOutQuint');
		$('.down a ').stop().animate({marginTop :'30px', opacity:"1"}, 600, 'easeOutQuint');
});



$(document).ready(function(){

//------------------------------------- Navigation setup ------------------------------------------------//


//--------- Scroll navigation ---------------//

$("#mainNav ul a, .logo a, .shortLink a, .down a").click(function(event){

		event.preventDefault();
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;

		$('html,body').animate({scrollTop:target_top -66}, 800);


});


//-------------Highlight the current section in the navigation bar------------//
	var sections = $("section");
		var navigation_links = $("#mainNav a");

		sections.waypoint({
			handler: function(event, direction) {

				var active_section;
				active_section = $(this);
				if (direction === "up") active_section = active_section.prev();

				var active_link = $('#mainNav a[href="#' + active_section.attr("id") + '"]');
				navigation_links.removeClass("active");
				active_link.addClass("active");

			},
			offset: '35%'
		});
		
		
//------------------------------------- End navigation setup ------------------------------------------------//



//---------------------------------- Testimonials-----------------------------------------//
$('#testimonials').slides({
	preload: false,
	generateNextPrev: false,
	play: 4500,
	container: 'testimoniaContainer'
});

//---------------------------------- End testimonials-----------------------------------------//

//---------------------------------- Form validation-----------------------------------------//




$('#submit').click(function(){ 

	$('input#name').removeClass("errorForm");
	$('textarea#message').removeClass("errorForm");
	$('input#email').removeClass("errorForm");
	
	var error = false; 
	var name = $('input#name').val(); 
	if(name == "" || name == " ") { 
		error = true; 
		$('input#name').addClass("errorForm");
	}
	
	
		var msg = $('textarea#message').val(); 
		if(msg == "" || msg == " ") {
			error = true;
			$('textarea#message').addClass("errorForm");
			
		}
	
	var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i; 
	var email = $('input#email').val(); 
	if (email == "" || email == " ") { 
		$('input#email').addClass("errorForm");
		error = true;
	}else if (!email_compare.test(email)) { 
		$('input#email').addClass("errorForm");
		error = true;
	}

	if(error == true) {
		return false;
	}

	var data_string = $('.contactForm form').serialize(); 
	

	$.ajax({
		type: "POST",
		url: $('.contactForm form').attr('action'),
		data: data_string,
		
		success: function(message) {
				if(message == 'SENDING'){
					$('#success').fadeIn('slow');
				}
				else{
					$('#error').fadeIn('slow');
				}
					}
					
					
					
	});

	return false; 
});



//---------------------------------- End form validation-----------------------------------------//



//--------------------------------- To the top handler --------------------------------//
$().UItoTop({ easingType: 'easeOutQuart' });
//--------------------------------- End to the top handler --------------------------------//


//--------------------------------- Mobile menu --------------------------------//


var fade=false;
$('.mobileBtn').click(function() {
		if(fade==false){
        	$('#mainNav ul').slideDown("slow");
			fade=true;
			return false;
			
		}else{
		
			$('#mainNav ul').slideUp("faste");
			fade=false;
			return false;	
		}
});


//--------------------------------- End mobile menu --------------------------------//


//--------------------------------- Parallax --------------------------------//
	
$(".subscribeContainer").parallax("100%", 0.3);
$(".feedContainer").parallax("100%", 0.3);

//--------------------------------- End parallax --------------------------------//



//--------------------------------- Counter--------------------------------//
var myDate = new Date(); 
myDate = new Date(myDate.getFullYear() + 1, 1-1, 1); 
$('.display').countdown({until: myDate}); 
//--------------------------------- End counter--------------------------------//


//---------------------------------- Newsletter form validation-----------------------------------------//
$(".subscribeHolder form").validate();
//---------------------------------- End newsletter form validation-----------------------------------------//


});






