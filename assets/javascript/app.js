var topics = ["Melee Fox", "Super Smash Bros Melee", "Melee Falco", "Melee Marth", "Melee Sheik", "Melee Captain Falcon"];

$(document).ready(function() {
    for (var i = 0; i < topics.length; i++) {
        $("#character-buttons").append("<button type='button' onclick='searchGif(\"" + topics[i] + "\")' class='btn btn-primary' value=' " + topics[i] + "'> " + topics[i] + " </button>");
    }
});

function characterButtonClicked() {
    var userInput = $('#character-input').val();
    searchGif(userInput);
}

function submitButtonClicked() {
    var userInput = $('#character-input').val();

    if (userInput) {
        $('#character-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value=' " + userInput + "'> " + userInput + " </button>");
    }
}

function searchGif(gifName) {
    $.ajax({
            url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=dxXvcNeeDhWpf6Ww8sMKiiguRHjhwitx',
            type: 'GET',
        })
        .done(function(response) {
            displayGif(response);
        })
}


