function alerts()
{

	alert("Hey my script is running");

}

/*
function imageLink()
{
	
	var currentImageClass = document.getElementsByClassName('active');
	
	if(currentImageClass.alt == "Image 1"){
		
	}else if('.active'.image.getAttribute('alt'); == "Image 2"){
		
	}else if('.active'.alt == "Image 3"){
		
	}else if('.active'.alt == "Image 4"){
		
	}else if('.active'.alt == "Image 5"){
		
	}else{
		
	}
	
}
*/
	
$(document).ready(function()
{
	
	
	$('.next').on('click', function()
	{
		
		var currentImage = $('.active');
		var nextImage = currentImage.next();
		
		if(nextImage.length){
			
			currentImage.removeClass('active').css('z-index', -10);
			nextImage.addClass('active').css('z-index', 10);
			
		}
	});
	
	$('.prev').on('click', function()
	{
		
		var currentImage = $('.active');
		var prevImage = currentImage.prev();
		
		if(prevImg.length)
		{
			
			currentImage.removeClass('active').css('z-index', -10);
			prevImage.addClass('active').css('z-index', 10);
			
		}
	});
});