var buttons = [
	'goats',
	'pikachu',
	'kakashi',
	'cuphead',
	'burrito'
];
var limit = 10;
function addButton() {
	var newAnimal = document.getElementById('newAnimal');
	buttons.push(newAnimal.value);
	var savedButton = $('<button>').html('#' + newAnimal.value);
	savedButton.attr('value', newAnimal.value);
	savedButton.attr('id', newAnimal.value);
	savedButton.attr('class', 'searchTerm');
	savedButton.click(function() {
		$('#images').html('');
		var searchTerm = this.id;
		var queryURL =
			'https://api.giphy.com/v1/gifs/search?q=' +
			searchTerm +
			'&api_key=ZSZXyJ3vXquP0eg7071aouGOQ3Jtogrf&limit=' +
			limit;
		$.ajax({
			url    : queryURL,
			method : 'GET'
		}).then(function(response) {
			for (i = 0; i < limit; i++) {
				var rating = response.data[i].rating;
				var gifDiv = $('<div>');
				var gifs = $('<img>');
				var tag = $('<h1>').html('#' + searchTerm);
				var p = $('<p>').html('Rating: ' + rating);
				gifDiv.attr('class', 'poloroid');
				gifs.attr('src', response.data[i].images.original.url);
				gifs.attr('class', 'gif');
				gifs.attr('alt', 'image');
				gifDiv.append(gifs);
				gifDiv.append(tag);
				gifDiv.append(p);
				$('#images').prepend(gifDiv);
				$('.gif').on('click', function() {
					var src = $(this).attr('src');
					if ($(this).hasClass('playing')) {
						$(this).attr('src', src.replace(/\.gif/i, '_s.gif'));
						$(this).removeClass('playing');
					} else {
						$(this).addClass('playing');
						$(this).attr('src', src.replace(/\_s.gif/i, '.gif'));
					}
				});
			}
		});
	});
	$('#animalButtons').append(savedButton);
	$('#newAnimal').val('');
}
function setup() {
	$('#newAnimal').on('keypress', function(event) {
		if (event.keyCode === 10 || event.keyCode === 13) {
			event.preventDefault();
			$('#newAnimalBtn').click();
		}
	});
	for (i = 0; i < buttons.length; i++) {
		let buttonLabel = buttons[i];
		var savedButton = $('<button>').html('#' + buttonLabel);
		savedButton.attr('value', buttonLabel);
		savedButton.attr('class', 'searchTerm');
		savedButton.attr('id', buttonLabel);
		savedButton.click(function() {
			$('#images').html('');
			var searchTerm = this.id;
			var queryURL =
				'https://api.giphy.com/v1/gifs/search?q=' +
				searchTerm +
				'&api_key=ZSZXyJ3vXquP0eg7071aouGOQ3Jtogrf&limit=' +
				limit;
			$.ajax({
				url    : queryURL,
				method : 'GET'
			}).then(function(response) {
				console.log(response);
				for (i = 0; i < limit; i++) {
					var rating = response.data[i].rating;
					var gifDiv = $('<div>');
					var gifs = $('<img>');
					var tag = $('<h1>').html('#' + searchTerm);
					var p = $('<p>').html('Rating: ' + rating);
					gifDiv.attr('class', 'poloroid');
					gifs.attr('src', response.data[i].images.original.url);
					gifs.attr('class', 'gif');
					gifs.attr('alt', 'image');
					gifDiv.append(gifs);
					gifDiv.append(tag);
					gifDiv.append(p);
					$('#images').prepend(gifDiv);
					$('.gif').on('click', function() {
						var src = $(this).attr('src');
						if ($(this).hasClass('playing')) {
							$(this).attr('src', src.replace(/\.gif/i, '_s.gif'));
							$(this).removeClass('playing');
						} else {
							$(this).addClass('playing');
							$(this).attr('src', src.replace(/\_s.gif/i, '.gif'));
						}
					});
				}
			});
		});
		$('#animalButtons').append(savedButton);
	}
}
