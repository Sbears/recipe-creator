var Recipe = function(name, prepTime, cookTime, description, serves, recipeYield, ingredients, directions) {
	this.name = name;
	this.prepTime = prepTime;
	this.cookTime = cookTime;
	this.totalTime = prepTime + cookTime;
	this.description = description;
	this.serves = serves;
	this.recipeYield = recipeYield;
	this.ingredients = ingredients;
	this.directions = directions;
	// this.category = category;
	// this.meal = meal;
};

Recipe.prototype.render = function() {

	if(!this.el) {
		this.el = $("#recipe-tpl")
		.clone()
		.attr("id", null);
	}
	console.log(this.el);
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

$(".create-recipe-form").on("submit", function() {
	$(this).find()
});

	var chicken = new Ingredient("boneless skinless chicken breasts", 4);
	var limeJuice = new Ingredient("lime juice", 0.25, "cups");
	var cilantro = new Ingredient("cilantro", 0.5, "cups");
	var garlic = new Ingredient("garlic cloves, chopped", 6);
	var honey = new Ingredient("honey", 1, "Tb");
	var oliveOil = new Ingredient("olive oil", 1, "Tb");
	var salt = new Ingredient("salt", 0.5, "tsp"); 
	var pepper = new Ingredient("pepper", 0.25, "tsp");


  var cilantroChicken = new Recipe("Cilantro Chicken", 40, 15, "This recipe includes an easy to put together marinade that gives chicken breasts a nice flavor. It is great served with Mexican Rice and tortillas. Recipe is from Sunset Magazine and was submitted by Cheryl Brown.", 4, null, [chicken, limeJuice, cilantro, garlic, honey, oliveOil, salt, pepper], "Pound the chicken breasts to an even thickness (about 1/2 in.) and place in a shallow baking pan.\nIn a small bowl, mix lime juice, cilantro, garlic, honey, olive oil, salt, and pepper. Pour over chicken and turn pieces to coat evenly. Cover and chill at least 30 minutes or overnight.\nLay chicken on a grill over medium heat (you can hold you hand over the surface only 4 to 5 seconds) and cook, turning once, until no longer pink in the center, 4 to 6 minutes per side." );



$(".recipe-viewing").append(cilantroChicken.render());
//console.dir(cilantroChicken.render());








$(document).on('ready', function() {



});