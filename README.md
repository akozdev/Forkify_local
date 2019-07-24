# Instructions

There are two new files in the src/data directory - pizza.js (results) and pizza_ingredients.js (ingredients for the first pizza in results).
Import pizza.js inside of the src/models/Search.js file
`import pizza from './data/pizza.js';`

Import pizza_ingredients.js inside of the src/models/Recipe.js file
`import pizzaIngredients from './data/pizza_ingredients';`


This is how the getResults function from src/models/Search.js file should look like

async getResults() {
    try {
        this.result = pizza.recipes;
    } catch (error) {
        alert(error);
    }
}

This is how the getResults function from src/models/Recipe.js file should look like

async getRecipe() {
    try {
        const res = pizzaIngredients;
        this.title = res.data.recipe.title;
        this.author = res.data.recipe.publisher;
        this.img = res.data.recipe.image_url;
        this.url = res.data.recipe.source_url;
        this.ingredients = res.data.recipe.ingredients;
    } catch (error) {
        console.log(error);
        alert('Something went wrong :(');
    }
}