/*$(document).ready(function(){
	$.getJSON("facultyList.json", function(data){
		$.each(data, function(){
			$.each(this, function(key, value){
				$("#faculty").append(
				"<img src=" + "'" + value.image + "'><br>" +
				"<h2>" + value.full_name + "</h2>" +
				"<h3>" + value.department + "</h3>" +
				"<p>" + value.bio + "</p><br>"
				);
			});
		});
	});

});*/

$(document).ready(function(){ 
    $.getJSON("facultyList.json", function(data){ 
        $.each(data, function() { 
            $.each(this, function(key, value) { 
                $("#faculty").append( 
                    /*"Name: " + value.full_name + "<br>" +  
                    "Title: " + value.department + "<br>" +  
                    "Bio: " + value.bio + "<br><br>" */
					"<img src=" + "'" + value.image + "'><br>" +
					"<h2>" + value.full_name + "</h2>" +
					"<h3>" + value.department + "</h3>" +
					"<p>" + value.bio + "</p><br>"
                ); 
            }); 
        });  
    }); 
}); 

function alerts(){

	alert("Hey my script is running");

	}