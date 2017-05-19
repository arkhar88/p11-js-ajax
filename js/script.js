var url = 'http://api.icndb.com/jokes/random';

var btn = document.getElementById('get-joke');
btn.addEventListener('click', function() {
    getJoke();
});

var par = document.getElementById('joke');

function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function() {
        var response = JSON.parse(xhr.response);
        par.innerHTML = response.value.joke;
    });
    xhr.send();
}

$(function() {
    getJoke();
});
