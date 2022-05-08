console.log("Loading JS file");
const api_key = '_HyU-LCjmmWczVkUDEHvN1KASN4jZDvg6HlZkt8v-JXQkD2iVhNFu6pnyTV-j37hlQEWO7wVe8nGKuY19V7zSlXaB93v485D79XlT0DIl1kD69R-ykuts-gW6hhvYnYx';



const options = {
    method: 'GET',
    headers: {
        'Authorization': "Bearer" + api_key,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "https://api.yelp.com"
    },
    mode: 'JSONP'
};



// Original API fetch
var getUserRepos = function (user) {
    var apiUrl = "https://api.yelp.com/v3/businesses/search?term=pizza&limit=10&sort_by=rating&location=";

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayRepos(data, user);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to GitHub');
        });
};

getUserRepos();

var searchEl = document.getElementById("query");

document.querySelector('form.searchPizza').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(searchEl.value);
});

