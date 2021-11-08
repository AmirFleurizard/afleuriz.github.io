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
		
		$("#pic_holder").append("<ul>");
		
		$("#pics_holder ul").css("width", (count)*990);
		
		for(var i = 0; i<count-1; i++){
			var $li = $("<li>").append($li);
			$("#pics_holder ul").append($li);
		}
		
		var $last_li = $("<li><img src="" + pics[pics.length-1][0];
		$("#pics_holder ul").prepend($last_li);

        // set up the event handlers for each link

    	$("#image_list").click(function (evt) {

		// cancel the default action of the link

		evt.preventDefault();

		var imageURL = $(this).attr("href");

		var caption = $(this).attr("title");

		$("#caption").fadeOut(1000, function(){

		$("#caption").text(caption).fadeIn(1000);

		});

		$("#image").fadeOut(1000, function(){

		$("#image").attr("src", imageURL).fadeIn(1000);

		});

		}); // end click

		// move focus to first thumbnail

		$("li:first-child a").focus();

		$("#image").hide().fadeIn(1000);

		$("#caption").hide().fadeIn(1000);

}); // end ready