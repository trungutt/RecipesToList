/* @flow */

import _ from 'lodash';

import initialState from '../../store';
import actions from './constants';


type State = {
	entities: {
		recipes: Object,
		ingredients: Object,
	},
	openedRecipe: any,
	chosenRecipes: Array<string>,
};

type ShowRecipeAction = {
	type: typeof actions.SHOW_RECIPE,
	payload: string
};
type AddRecipeAction = {
	type: typeof actions.ADD_RECIPE,
	payload: string
};
type RecipesAction = ShowRecipeAction | AddRecipeAction;

const recipes = (state: State = initialState, action: RecipesAction): State => {
	switch (action.type) {
		case actions.SHOW_RECIPE:
			return {
				...state,
				openedRecipe: action.payload,
			};
		case actions.ADD_RECIPE:
			return {
				...state,
				chosenRecipes: _.uniq([
					...state.chosenRecipes,
					action.payload,
				]),
			};
		default:
			return state;
	}
};

export default recipes;
