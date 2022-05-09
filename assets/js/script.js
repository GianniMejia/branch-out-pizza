console.log("Loading JS file");
const yelp_key = '_HyU-LCjmmWczVkUDEHvN1KASN4jZDvg6HlZkt8v-JXQkD2iVhNFu6pnyTV-j37hlQEWO7wVe8nGKuY19V7zSlXaB93v485D79XlT0DIl1kD69R-ykuts-gW6hhvYnYx';
const pnd_key = 'b29978175cmsh7acead99898141dp1966d1jsn9658d91e4b1d';
const place = "Berkley,CA"

const options = {
    method: 'GET',
    headers: {
        'Authorization': "Bearer" + yelp_key,
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    },
    mode: 'cors',

};

var getUserRepos = function (user) {
    var yelpApi = "https://api.yelp.com/v3/businesses/search?term=pizza&limit=10&sort_by=rating&location=" + place;

    fetch(yelpApi)
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


var getUserReposOLD = function (user) {
    // var pndApi = "https://pizza-and-desserts.p.rapidapi.com/pizzas";

    //     fetch(pndApi)
    //         .then(function (response) {
    //             if (response.ok) {
    //                 console.log(response);
    //                 response.json().then(function (data) {
    //                     console.log(data);
    //                     displayRepos(data, user);
    //                 });
    //             } else {
    //                 alert('Error: ' + response.statusText);
    //             }
    //         })
    //         .catch(function (error) {
    //             alert('Unable to connect to GitHub');
    //         });
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
            'X-RapidAPI-Key': 'b29978175cmsh7acead99898141dp1966d1jsn9658d91e4b1d'
        }
    };

    fetch('https://pizza-and-desserts.p.rapidapi.com/pizzas', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            displayRepos(response, user);
        }
        )
        .catch(err => console.error(err));
};

function displayRepos(data, user) {
    //grab the ul element from index.html 
    var ulElement = document.getElementsByClassName('pizza-results');
    console.log(ulElement);
    //loop through all the api results 
    for (var i = 0; i < data.length; i++) {
        console.log(i);
        var pizzaDiv = document.createElement("div");
        pizzaDiv.setAttribute('class', 'pizza-card');
        //create a li tag element 
        var liTag = document.createElement("li");

        liTag.setAttribute('class', 'pizza-name');
        liTag.textContent = data[i].name;
        var liTag2 = document.createElement("li");
        liTag2.textContent = " Description: " + data[i].description;
        var imgTag = document.createElement("img");
        imgTag.setAttribute('class', 'pizza-img');

        imgTag.setAttribute('src', data[i].img);
        var isVeg = data[i].veg; 
console.log(isVeg);
        var pizzaBox = document.createElement("div"); 
        if(isVeg){

        pizzaBox.setAttribute('class', 'pizza-box green');
    }else {
        pizzaBox.setAttribute('class', 'pizza-box red');
    }
    //append the li tag to html page
        pizzaDiv.appendChild(liTag);
        pizzaDiv.appendChild(pizzaBox);
        pizzaDiv.appendChild(liTag2);
        pizzaDiv.appendChild(imgTag);

        ulElement[0].appendChild(pizzaDiv);
    }

}

// getUserRepos();
getUserReposOLD();