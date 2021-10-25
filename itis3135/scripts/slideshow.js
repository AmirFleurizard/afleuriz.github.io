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
}*/
	
	
$(document).ready(function()
{
	
	
	$('.next').on('click', function()
	{
		
		var currentImg = $('.active');
		var nextImg = currentImg.next();
		
		if(nextImg.length)
		{
			
			currentImg.removeClass('active').css('z-index', -10);
			nextImg.addClass('active').css('z-index', 10);
			
		}
	});
	
	$('.prev').on('click', function()
	{
		
		var currentImg = $('.active');
		var prevImg = currentImg.prev();
		
		if(prevImg.length)
		{
			
			currentImg.removeClass('active').css('z-index', -10);
			prevImg.addClass('active').css('z-index', 10);
			
		}
	});
});