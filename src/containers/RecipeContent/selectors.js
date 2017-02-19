/* @flow */

const getOpenedRecipeContent =
	(recipes: Object, ingredients: Object, openedRecipe: Object): Object => {
		if (!openedRecipe) {
			return {};
		}

		const recipe = Object.assign({}, recipes[openedRecipe]);

		Object.keys(recipe.ingredients).forEach((ingredient) => {
			recipe.ingredients = {
				...recipe.ingredients,
				[ingredient]: `${recipe.ingredients[ingredient]} ${ingredients[ingredient].unit}`,
			};
		});

		return recipe;
	};

export default getOpenedRecipeContent;
