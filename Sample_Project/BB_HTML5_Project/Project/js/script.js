/* Author: olegnax

*/
$(document).ready(function() {
	
		jQuery('.slider').fadeIn(300);
			if ($("#s4").length) {
					$(function() {
					$('#s4')
						.after('<div id="nav">') 
						.cycle({ 
						fx:     'fade', 
						speed:  1000, 
						timeout: 3000, 
						next:   '#next2', 
						prev:   '#prev2',
						pager:  '#nav' 
					});
					});
				};
			$('input[type="text"],textarea').addClass("idleField");
       		$('input[type="text"],textarea,input[type="password"]').focus(function() {
       			$(this).removeClass("idleField").addClass("focusField");
    		    if (this.value == this.defaultValue){ 
    		    	this.value = '';
				}
				if(this.value != this.defaultValue){
	    			this.select();
	    		}
    		});
			
    		$('input[type="text"],textarea,input[type="password"]').blur(function() {
    			$(this).removeClass("focusField").addClass("idleField");
    		    if ($.trim(this.value) == ''){
			    	this.value = (this.defaultValue ? this.defaultValue : '');
				}
    		});
			jQuery('ul.sf-menu').superfish();
			// prettyPhoto
			if ($(".gallery_pic, .picturs, .videos").length) {
			$("a[rel^='prettyPhoto']").prettyPhoto({theme:'dark_square'});
			};		
			// lightbox image
			$(".gallery_pic, .picturs").prepend("<span></span>");
			$(".gallery_pic span, .picturs span").stop().animate({opacity:0},0)
					
			$(".gallery_pic, .picturs").hover(function(){
				$(this).find("span").stop().animate({opacity:1},300)
			}, function(){
				$(this).find("span").stop().animate({opacity:0},100)
			});
			$(".gallery_video, .videos").prepend("<span></span>")
			$(".gallery_video span, .videos span").stop().animate({opacity:0},0)
				
			$(".gallery_video, .videos").hover(function(){
				$(this).find("span").stop().animate({opacity:1},300)
			}, function(){
				$(this).find("span").stop().animate({opacity:0},100)
			});
			
			if ($("#carousel1").length) {
				$(window).load(function(){
					$('#carousel1').bxCarousel({
						display_num: 5,
						move: 2,
						prev_text: '&nbsp;',
						next_text: '&nbsp;',
						margin: 18
					});
				});
			};
			if (jQuery(".kwicks").length) { 
			  jQuery('.kwicks .slide .kwicks_title').css({ bottom: "0" });
			  jQuery('.kwicks .slide').fadeIn(300);  
			
			  jQuery('.kwicks').kwicks({
			   max :  940,
			   spacing : 0
			  });        
				  
				  
					jQuery('.kwicks li').hover(function() {
			  		jQuery('.info_text2', this).stop().fadeTo(900, 0.8);       
			  },function(){
			  jQuery('.info_text2', this).hide();
					
			 });
				}
			
			
			
if ($(".checked_block").length) {			
if ($(".checked_block").length) {			
$('input:checkbox:not([safari])').checkbox();
}

}
	
	jQuery('.extra_wrap', this).css({ backgroundImage: "url(images/transparate_bg.png)" });
	jQuery('.wide .extra_wrap', this).css({ backgroundImage: "url(images/transparate_bg_wide.png)" });
	
	jQuery.validator.addMethod("defaultInvalid", function(value, element) {
                return value != element.defaultValue;
        }, "");
				
				
			jQuery("#contactform").validate({
				
			submitHandler: function(form) {	
							
				var $ = jQuery;
			
				$('#loader').fadeIn();
		
				var formData = $(form).serialize(),
					note = $('#Note');
			
				$.ajax({
					type: "POST",
					url: "send.php",
					data: formData,
					success: function(response) {
						if ( note.height() ) {			
							note.fadeIn('fast', function() { $(this).hide(); });
						} else {
							note.hide();
						}
		
						$('#LoadingGraphic').fadeOut('fast', function() {
							//$(this).remove();
							if (response === 'success') {
								$('#contactform').animate({opacity: 0},'fast');
							}
		
							// Message Sent? Show the 'Thank You' message and hide the form
							result = '';
							c = '';
							if (response === 'success') { 
								result = 'Your message has been sent. Thank you!';
								c = 'success';
							}
		
							note.removeClass('success').removeClass('error').text('');
							var i = setInterval(function() {
								if ( !note.is(':visible') ) {
									note.html(result).addClass(c).slideDown('fast');
									clearInterval(i);
								}
							}, 40);    
						});
					}
				});
		
				return false;
			},
			
			 rules: 
      {
       formname: "required defaultInvalid",
	   formcomments: "required defaultInvalid"
      },
			
			 messages: {
    		 formname: "Please specify your name.",
			 formcomments: "Please enter your message.",
    		 formemail: {
      			 required: "We need your email address to contact you.",
      			 email: "Your email address must be in the format of name@domain.com"
    		 }
  		 }
		});
		
		
		
 jQuery("#contactform2").validate({
			submitHandler: function(form) {				
				var $ = jQuery;
			
				$('#loader2').fadeIn();
		
				var formData = $(form).serialize(),
					note = $('#Note2');
			
				$.ajax({
					type: "POST",
					url: "send.php",
					data: formData,
					success: function(response) {
						if ( note.height() ) {			
							note.fadeIn('fast', function() { $(this).hide(); });
						} else {
							note.hide();
						}
		
						$('#LoadingGraphic2').fadeOut('fast', function() {
							//$(this).remove();
							if (response === 'success') {
								$('#contactform2').animate({opacity: 0},'fast');
							}
		
							// Message Sent? Show the 'Thank You' message and hide the form
							result = '';
							c = '';
							if (response === 'success') { 
								result = 'Your message has been sent. Thank you!';
								c = 'success';
							}
		
							note.removeClass('success').removeClass('error').text('');
							var i = setInterval(function() {
								if ( !note.is(':visible') ) {
									note.html(result).addClass(c).slideDown('fast');
									clearInterval(i);
								}
							}, 40);    
						});
					}
				});
		
				
				return false;
			},
			
			 messages: {
    		 formname: "Please specify your name.",
			 formcomments: "Please enter your message.",
    		 formemail: {
      			 required: "We need your email address to contact you.",
      			 email: "Your email address must be in the format of name@domain.com"
    		 }
  		 }
		});
			//When page loads...
			$(".tab_content").hide(); //Hide all content
			$("ul.tabs li:first").addClass("active").show(); //Activate first tab
			$(".tab_content:first").show(); //Show first tab content
			
			//On Click Event
			$("ul.tabs li").click(function() {
			
				$("ul.tabs li").removeClass("active"); //Remove any "active" class
				$(this).addClass("active"); //Add "active" class to selected tab
				$(".tab_content").hide(); //Hide all tab content
			
				var activeTab = $(this).find("a").attr("href"); //Find the title attribute value to identify the active tab + content
				$(activeTab).fadeIn(); //Fade in the active ID content
				return false;
			});


});
jQuery('.list1 li').hover(function(){

   jQuery(this).stop().css({backgroundPosition: "0 -52px"});
    jQuery(this).stop().animate({ backgroundPosition: "7px -52px" }, 300);
	

}, function(){

    jQuery(this).stop().animate({ backgroundPosition: "0 -52px" }, 200);
	
 jQuery(this).stop().css({backgroundPosition: "-43px 4px"});


});
jQuery('.list2 li').hover(function(){

   jQuery(this).stop().css({backgroundPosition: "10px -60px"});
    jQuery(this).stop().animate({ backgroundPosition: "19px -60px" }, 300);
	

}, function(){

    jQuery(this).stop().animate({ backgroundPosition: "10px -60px" }, 200);
	
 jQuery(this).stop().css({backgroundPosition: "-55px 5px"});


});

jQuery('.list3 li').hover(function(){

   jQuery(this).stop().css({backgroundPosition: "17px -43px"});
    jQuery(this).stop().animate({ backgroundPosition: "22px -43px" }, 300);
	

}, function(){

    jQuery(this).stop().animate({ backgroundPosition: "17px -43px" }, 200);
	
 jQuery(this).stop().css({backgroundPosition: "-35px 9px"});

});