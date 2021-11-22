$(document).ready(function() {
	
	$("#nav_list li".click(function(){
		var title = $(this).children("a").attr("title");
		//the file name variable just holds the title of the element thats a child of a and attaches a .json to it
		var filename = title + ".json";
		consumeJSON(filename);
		});
	
}); // end ready

//i wanted this to loop through and display the title, month, etc for each on of the speakers on click
function consumeJSON(jsonFileURL)
{
	
	$.ajax({
		//the method would take the title attribute of the element with id title and display it in a json_files/ format
		//this would allow be the access the json_files folder and get the specific speakers json file
		url: "json_files/" + jsonFileURL,
		dataType: "text",
		success: function (data) 
		{
			
			//im not sure what isnt working with the code, but I think it either has something to do with my index or the way I got the title attrbute
			var json = $.parseJSON(data);
			$("main > h1").html(json.speakers[0].title);
			$("main > h2").html(json.speakers[0].month + "<br/>" + json.speakers[0].speaker);
			$("main > img").attr("src", json.speakers[0].image);
			$("main > p").html(json.speakers[0].text);
			
		}
	});
}


