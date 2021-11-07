$(document).ready(function() {


        // preload the image for each link
		var pics = [["images/t1.jpg", "images/h1.jpg"],
		["images/t2.jpg", "images/h2.jpg"],
		["images/t3.jpg", "images/h3.jpg"],
		["images/t4.jpg", "images/h4.jpg"],
		["images/t5.jpg", "images/h5.jpg"],
		["images/t6.jpg", "images/h6.jpg"]];
		
		var count = pics.length;
		var current = 1;
		
		var $imgs = new Array();
		
		for(var i = 0; i < count-1; i++){
			
			$imgs.push($('<img>').attr('src', pics[i][0]));
			
		}
		
		$("pic_holder")

        // set up the event handlers for each link

    			// get the image URL and caption for each image and animate the caption

            // cancel the default action of each link


    // move the focus to the first link

}); // end ready