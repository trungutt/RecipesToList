/* @flow */

import _ from 'lodash';


export const getChosenRecipes =
	(recipes: Object, chosenRecipes: Array<Object>): Array<Object> => chosenRecipes
		.map(chosenRecipe => recipes[chosenRecipe])
		.map(chosenRecipeObj => chosenRecipeObj.ingredients);

export const sum = (accumulator: number = 0, quantity: number = 0): number =>
	accumulator + quantity;

export const getShoppingIngredients = (recipes: Object, chosenRecipes: Array<Object>): Object => {
	const chosenRecipesObj = getChosenRecipes(recipes, chosenRecipes);

	return chosenRecipesObj.reduce((accumulator, chosenRecipe) =>
		_.mergeWith(accumulator, chosenRecipe, sum), {});
};

export const getShoppingIngredientsWithUnit =
	(shoppingIngredients: Object, ingredients: Object): Object =>
		Object.keys(shoppingIngredients).reduce((accumulator, ingredient) => ({
			...accumulator,
			[ingredient]: `${shoppingIngredients[ingredient]} ${ingredients[ingredient].unit}`,
		}), {});

export const getShoppingIngredientsWithUnitDepartment =
	(shoppingIngredientsWithUnit: Object, ingredients: Object): Object =>
		Object.keys(shoppingIngredientsWithUnit).reduce((accumulator, ingredient) => {
			const quantity = shoppingIngredientsWithUnit[ingredient];
			const department = ingredients[ingredient].department;

			if (accumulator[department]) {
				return _.merge(accumulator, {
					[department]: _.merge(accumulator[department], {
						[ingredient]: quantity,
					}),
				});
			}

			return _.merge(accumulator, {
				[department]: {
					[ingredient]: quantity,
				},
			});
		}, {});

export const getShoppingList =
	(recipes: Object, chosenRecipes: Array<Object>, ingredients: Object): Object => {
		if (chosenRecipes.length === 0) {
			return {};
		}

		const shoppingIngredients = getShoppingIngredients(recipes, chosenRecipes);

		const shoppingIngredientsWithUnit = getShoppingIngredientsWithUnit(
			shoppingIngredients,
			ingredients,
		);

		const shoppingList = getShoppingIngredientsWithUnitDepartment(
			shoppingIngredientsWithUnit,
			ingredients,
		);

		return shoppingList;
	};

export default getShoppingList;
