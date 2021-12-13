$(document).ready(function() {
    $("#slider").bxSlider({
        auto: false,
		maxSlides: 1,
		minSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
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
            $.each(this, function(key, value) { 
                $("#about").append(
					"<img src=" + "'" + value.image + "' width=" + 400 + " height=" + 600 + " alt='Client headshot, Photo by Amir'><br>" +
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
         
        // Add text 'loading...' right after clicking on the submit button. 
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
         
        // Prevents default submission of the form after clicking on the submit button. 
        return false;   
    });
});