import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import RecipeContent from '../components/RecipeContent/RecipeContent';

//TODO : export selector
const recipesSelector = state => state.entities.recipes;
const ingredientsSelector = state => state.entities.ingredients;
const openedRecipeSelector = state => state.openedRecipe;

const getOpenedRecipeContent = (recipes, ingredients, openedRecipe) => {
	if (!openedRecipe)
		return null;

	const recipe = {
		...recipes[openedRecipe],
	};
	for (const key in recipe.ingredients) {
		const unit = ingredients[key].unit;
		recipe.ingredients = {
			...recipe.ingredients,
			[key]: `${recipe.ingredients[key]} ${unit}`,
		};
	}

	return recipe;
};

const selectOpenedRecipeContent = createSelector(
	recipesSelector,
	ingredientsSelector,
	openedRecipeSelector,
	getOpenedRecipeContent,
);

// TODO: move to selectors.js
const mapStateToProps = state => ({
	recipe: selectOpenedRecipeContent(state),
});

const RecipeContentContainer = connect(mapStateToProps)(RecipeContent);
export default RecipeContentContainer;
