	var Recipe = function(name, prepTime, cookTime, description, serves, recipeYield, ingredients, directions) {
		this.name = name;
		this.prepTime = prepTime;
		this.cookTime = cookTime;
		this.description = description;
		this.serves = serves;
		this.recipeYield = recipeYield;
		this.ingredients = ingredients;
		this.directions = directions;
	};

	var Ingredient = function(name, quantity, unit) {
		this.name = name;
		this.quantity = quantity;
		this.unit = unit;
	};

	var chicken = new Ingredient("boneless skinless chicken breast halves", 4, null);
	var limeJuice = new Ingredient("lime juice", 0.25, "cups");

  var cilantroChicken = new Recipe("Cilantro Chicken", 40, 15, "This recipe includes an easy to put together marinade that gives chicken breasts a nice flavor. It is great served with Mexican Rice and tortillas. Recipe is from Sunset Magazine and was submitted by Cheryl Brown.", 4, null, "Chicken", "Pound the chicken breasts to an even thickness (about 1/2 in.) and place in a shallow baking pan.\nIn a small bowl, mix lime juice, cilantro, garlic, honey, olive oil, salt, and pepper. Pour over chicken and turn pieces to coat evenly. Cover and chill at least 30 minutes or overnight.\nLay chicken on a grill over medium heat (you can hold you hand over the surface only 4 to 5 seconds) and cook, turning once, until no longer pink in the center, 4 to 6 minutes per side." );



console.dir(cilantroChicken);













$(document).on('ready', function() {



});