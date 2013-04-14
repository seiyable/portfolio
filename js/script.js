$(function(){
	
	// container is the DOM element;
	// userText is the textbox
	
	var container = $("#container");
		 
	
	// Shuffle the contents of container
	container.shuffleLetters();

	// Leave a 4 second pause

	setTimeout(function(){
		
		// Shuffle the container with custom text
		container.shuffleLetters({
			"text": "Test it for yourself!"
		});		
	},4000);
	
});

