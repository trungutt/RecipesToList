import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import ShoppingList from '../components/ShoppingList/ShoppingList';


const recipesSelector = state => state.entities.recipes;
const chosenRecipesSelector = state => state.chosenRecipes;
const ingredientsSelector = state => state.entities.ingredients;

const getShoppingList = (recipes, chosenRecipes, ingredients) => {
	if (chosenRecipes.length === 0)
		return {};

	let shoppingIngredients = chosenRecipes.reduce((ingredientsAccumulator, chosenRecipe) => {
		const recipe = recipes[chosenRecipe];
		const { ingredients } = recipe;
		for (const [ingredient, quantity] of Object.entries(ingredients)) {
			if (ingredientsAccumulator.hasOwnProperty(ingredient)) {
				ingredientsAccumulator = {
					...ingredientsAccumulator,
					[ingredient]: ingredientsAccumulator[ingredient] + quantity,
				};
			} else {
				ingredientsAccumulator = {
					...ingredientsAccumulator,
					[ingredient]: quantity,
				};
			}
		}

		return ingredientsAccumulator;
	}, {});

	for (let [ingredient, quantity] of Object.entries(shoppingIngredients)) {
		shoppingIngredients = {
			...shoppingIngredients,
			[ingredient]: shoppingIngredients[ingredient] + ' ' + ingredients[ingredient].unit,
		};
	}

	let shoppingList = {};

	for (let [ingredient, quantity] of Object.entries(shoppingIngredients)) {
		const department = ingredients[ingredient].department;
		if (shoppingList.hasOwnProperty(department)) {
			if (!shoppingList[department].hasOwnProperty(ingredient)) {
				shoppingList[department] = {
					...shoppingList[department],
					[ingredient]: quantity,
				};
			}
		} else {
			shoppingList = {
				...shoppingList,
				[department]: {
					[ingredient]: quantity,
				},
			};
		}
	}

	return shoppingList;
};

const selectShoppingList = createSelector(
	recipesSelector,
	chosenRecipesSelector,
	ingredientsSelector,
	getShoppingList,
);

// TODO: move to selectors.js
const mapStateToProps = state => ({
	shoppingList: selectShoppingList(state),
});

const IngredientsListContainer = connect(mapStateToProps)(ShoppingList);
export default IngredientsListContainer;
