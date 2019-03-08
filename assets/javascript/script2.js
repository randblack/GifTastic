var buttons = [
	'cats',
	'dogs',
	'birds',
	'pigs',
	'goats',
	'sheep'
];

var searchTerm = 'cats';

for (i = 0; i < buttons.length; i++) {
	$('#animalbuttons').prepend('this animal' + buttons[i]);
	console.log(buttons[i]);
}

//add click listener to cat button
$('#cat-button').on('click', function() {
	//access giphy image search api
	var queryURL = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats';
	//
	$.ajax({
		url    : queryURL,
		method : 'GET'
	})
		//
		.then(function(response) {
			console.log(response);
			//get image url from giphy
			var imageUrl = response.data.embed_url;
			//add image tag
			var catImage = $('<img>');
			//add scraped image url to image tag
			catImage.attr('src', imageUrl);
			catImage.attr('alt', 'cat image');
			// add found image to top of images div
			$('#images').prepend(catImage);
		});
});
