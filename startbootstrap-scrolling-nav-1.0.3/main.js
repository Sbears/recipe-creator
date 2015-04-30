var Recipe = function(name, prepTime, cookTime, description, serves, recipeYield, ingredients, directions, category, meal) {
	console.log(arguments);
	this.name = name;
	this.prepTime = prepTime;
	this.cookTime = cookTime;
	this.totalTime = parseInt(prepTime) + parseInt(cookTime);
	this.description = description;
	this.serves = serves;
	this.recipeYield = recipeYield;
	this.ingredients = ingredients;
	this.directions = directions;
	this.category = category;
	this.meal = meal;
};



Recipe.prototype.render = function() {

	if(!this.el) {
		this.el = $("#recipe-tpl")
		.clone()
		.attr("id", null);
	}

	for (var i = 0; i < this.ingredients.length; i++) {
		
		this.el.find(".ingredient-list").append(this.ingredients[i].render());
	}

	this.el.find(".recipe-name").text(this.name);
	this.el.find(".prep-time").text(this.prepTime);
	this.el.find(".cook-time").text(this.cookTime);
	this.el.find(".total-time").text(this.totalTime);	
	this.el.find(".recipe-description em").text(this.description);
	this.el.find(".serves").text(this.serves);	
	this.el.find(".yield").text(this.recipeYield);
	this.el.find(".recipe-directions").text(this.directions);

	return this.el;
};

Recipe.prototype.renderList = function() {
	if(!this.listel) {
		this.listel = $("#recipe-list-tpl")
		.clone()
		.attr("id", null);
	}
	this.listel.find(".recipe-name").text(this.name);
	this.listel.find(".recipe-category").text(this.category + ", " + this.meal);
	return this.listel;
};

var Ingredient = function(name, quantity, unit) {
	this.name = name;
	this.quantity = quantity;
	this.unit = unit;
};

Ingredient.prototype.render = function() {
//	console.log("test");
	if(!this.el) {
		this.el = $("#ingredient-tpl")
			.clone()
			.attr("id", null);
	}
	this.el.find(".name").text(this.name);
	this.el.find(".quantity").text(this.quantity);
	this.el.find(".unit").text(this.unit);
	return this.el;
};

Ingredient.prototype.renderList = function() {
	if(!this.listel) {
		this.listel = $("#ingredient-list-tpl")
			.clone()
			.attr("id", null);
	}
	this.listel.text(this.quantity + " " + this.unit + " " +  this.name);
	// this.listel.find(".quantity").text(this.quantity);
	// this.listel.find(".unit").text(this.unit);
	return this.listel;
};
 
var ingredientArray = [];

$("#create-recipe-form").on("submit", function(e) {
	e.preventDefault();
});

$("#enter-ingredient-button").on("click", function(e) {
	console.log("test");
//	 e.preventDefault();
	var name = $(".input-ingredient").val();
	var quantity = $(".input-quantity").val();
	var unit = $(".input-unit").val();
	console.log(name, quantity, unit);

	var oneIngredient = new Ingredient(name, quantity, unit);

	ingredientArray.push(oneIngredient);

	$(".enter-ingredient-container").append(oneIngredient.renderList());
	//console.log(oneIngredient.renderList());
});
	console.log(ingredientArray);

////////// Event Handler Will Create an Instance of a Recipe From Form ////////////
console.log($("#create-recipe-form"));
$(".submit-button").on("click", function(e) {
//	e.preventDefault();
	var name = $(this).parents("#create-recipe-form").find(".input-name").val();
	var prepTime = $(this).parents("#create-recipe-form").find(".input-prep-time").val();
	var cookTime = $(this).parents("#create-recipe-form").find(".input-cook-time").val();
	var description = $(this).parents("#create-recipe-form").find(".input-description").val();
	var serves = $(this).parents("#create-recipe-form").find(".input-serves").val();
	var recipeYield = $(this).parents("#create-recipe-form").find(".input-yield").val();
	var ingredients = ingredientArray;
	var directions = $(this).parents("#create-recipe-form").find(".input-directions").val();
	var category = $(this).parents("#create-recipe-form").find(".input-category").val();
	var meal = $(this).parents("#create-recipe-form").find(".input-meal").val();
	console.log($(this).parents("#create-recipe-form").find(".input-prep-time"));
	var oneRecipe = new Recipe(name, prepTime, cookTime, description, serves, recipeYield, ingredients, directions, category, meal);
 	console.log(oneRecipe);
 	console.log(oneRecipe.cookTime);
 	$(".recipe-viewing").append(oneRecipe.render());
	$(".recipe-list-container").append(oneRecipe.renderList());
	document.getElementById("create-recipe-form").reset();

});

///////// Instance of Cilantro Chicken Recipe //////////////////////////
	var chicken = new Ingredient("boneless skinless chicken breasts", 4);
	var limeJuice = new Ingredient("lime juice", 0.25, "cups");
	var cilantro = new Ingredient("cilantro", 0.5, "cups");
	var garlic = new Ingredient("garlic cloves, chopped", 6);
	var honey = new Ingredient("honey", 1, "Tb");
	var oliveOil = new Ingredient("olive oil", 1, "Tb");
	var salt = new Ingredient("salt", 0.5, "tsp"); 
	var pepper = new Ingredient("pepper", 0.25, "tsp");


  var cilantroChicken = new Recipe("Cilantro Chicken", 40, 15, "This recipe includes an easy to put together marinade that gives chicken breasts a nice flavor. It is great served with Mexican Rice and tortillas. Recipe is from Sunset Magazine and was submitted by Cheryl Brown.", 4, null, [chicken, limeJuice, cilantro, garlic, honey, oliveOil, salt, pepper], "Pound the chicken breasts to an even thickness (about 1/2 in.) and place in a shallow baking pan.\nIn a small bowl, mix lime juice, cilantro, garlic, honey, olive oil, salt, and pepper. Pour over chicken and turn pieces to coat evenly. Cover and chill at least 30 minutes or overnight.\nLay chicken on a grill over medium heat (you can hold you hand over the surface only 4 to 5 seconds) and cook, turning once, until no longer pink in the center, 4 to 6 minutes per side.", "Main Course", "Dinner" );



console.log(cilantroChicken.category);
console.log(cilantroChicken.meal);

$(".recipe-list-container").append(cilantroChicken.renderList());
// $(".recipe-viewing").append(cilantroChicken.render());

//console.dir(cilantroChicken.render());








$(document).on('ready', function() {



});