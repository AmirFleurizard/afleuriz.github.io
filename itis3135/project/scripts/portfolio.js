$(document).ready(function() {
	//slider widget
    $("#slider").bxSlider({
		//I decided to not make it automatically cycle
        auto: false,
		maxSlides: 1,
		minSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
		//the random start felt unnecessary so I made it false
		randomStart: false,
		captions: true,
		speed: 2000,
		pagerType: 'short',
        pagerSelector: '#id_pager',
		moveSlides: 1
		
    });
});

function alerts(){

	alert("Hey my script is running");

}
	
//jQuery call to the accordion() method.
$(document).ready(function() {
	$('#accordion').accordion({
		
		active: false,
		collapsible: true
		
	});
});

$(document).ready(function(){ 
    $.getJSON("aboutme.json", function(data){ 
        $.each(data, function() { 
		//loops through json
            $.each(this, function(key, value) { 
			//appends info into designated div element
                $("#about").append(
					"<center>" +
					"<img src=" + "'" + value.image + "' width=" + 400 + " height=" + 600 + " alt='Client headshot, Photo by Amir'><br>" +
					"</center>" +
					"<h2>" + value.full_name + "</h2>" +
					"<h3>" + value.major + "</h3>" +
					"<p>" + value.bio + "</p><br>"
                ); 
            }); 
        });  
    }); 
}); 

$(document).ready(function() {
    $('.myform').on('submit',function(){
         
        $('.output_message').text('Loading...'); 
         
        var form = $(this);
        $.ajax({
            url: form.attr('action'),
            method: form.attr('method'),
            data: form.serialize(),
            success: function(result){
                if (result == 'success'){
                    $('.output_message').text('Message Sent!');  
                } else {
                    $('.output_message').text('Error Sending email!');
                }
            }
        });
         
        return false;   
    });
});