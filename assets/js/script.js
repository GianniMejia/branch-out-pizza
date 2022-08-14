// spoontacular api function for random recipe

displayRecipe = function () {

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48bf167781mshb0c05079ca1a209p1d0909jsnecfac70feb12',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=pizza&number=30&offset=0', options)
	.then(response => response.json())
	.then(response => { 
        let i = Math.floor(Math.random()*response.results.length);
        let randomRecipe = [response.results[i].image];
        document.getElementById('recipe-card').innerHTML = randomRecipe;
        console.log(response.results[0]);
    })
	.catch(err => console.error(err));

}
// end spoontacular api





const pnd_key = 'b29978175cmsh7acead99898141dp1966d1jsn9658d91e4b1d';

var pullPizzaList = function (user) {
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
            displayPizzas(response, user);
        }
        )
        .catch(err => console.error(err));
};
function displayPizzas(data) {
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

pullPizzaList();