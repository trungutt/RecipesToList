/* @flow */

type State = {
	entities: {
		recipes: Object,
		ingredients: Object,
	},
	openedRecipe: any,
	chosenRecipes: Array<string>,
};

const recipesSelector = (state: State): Object => state.entities.recipes;
const ingredientsSelector = (state: State): Object => state.entities.ingredients;
const openedRecipeSelector = (state: State): Object => state.openedRecipe;
const chosenRecipesSelector = (state: State): Array<string> => state.chosenRecipes;

const selectors = {
	recipesSelector,
	ingredientsSelector,
	openedRecipeSelector,
	chosenRecipesSelector,
};

export default selectors;
