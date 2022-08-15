// spoontacular api function for random recipe

// deleteLink = function() {
//     if (document.getElementById('recipe-link') === true) {
//         document.getElementById('recipe-link').remove
//     } else {
        
//     }
// }

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

        recipe = document.getElementById('recipe-link');
        if (recipe === true) {
            recipe.remove()
        } 

        console.log(response.results);

        let i = Math.floor(Math.random()*response.results.length);
        
    // url link created with random result    
        var a = document.createElement('a');
        a.setAttribute('id', 'recipe-link')
        var link = document.createTextNode(response.results[i].title);
        a.appendChild(link);
        a.title = response.results[i].title;
        a.href = response.results[i].sourceUrl;
        document.getElementById('recipe-card').append(a);

    // url link end    
        
    


    // var recipeImage = document.createElement("a");
    // recipeImage.setAttribute('class', 'recipe-image');
    // recipeImage.setAttribute('href', response.results[i].sourceUrl+response.results[i].image);

    // console.log(recipeImage);
       
    // let randomRecipe = [response.results[i].title];
    //     document.getElementById('recipe-card').innerHTML = randomRecipe;
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