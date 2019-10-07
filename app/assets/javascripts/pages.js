// shows certain elements when you scroll over them
$(document).ready(function() {
    
    // Every time the window is scrolled ...
    $(window).scroll( function(){
    
        // Check the location of each desired element
        $('.scroll-show').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            // If the object is completely visible in the window, fade it in
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},3500);
            }
        }); 
    });
});

// fade-in each skill on about me page at a different speed on scroll
var speeds = [700, 1700, 2700, 3700];
$(document).ready(function() {
    $(window).scroll( function(){
        $('.scroll-show-skills').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                $(this).fadeIn(speeds[i]);
            }
        }); 
    });
});

//fade-in portfolio elements at different speeds
var speeds = [500, 1000, 1500];
$(document).ready(function() {
    $(window).scroll( function(){
        $('.scroll-show-portfolio').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 300;
            
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},speeds[i]);
            }
        }); 
    });
});

console.log("Do you come here often?");





