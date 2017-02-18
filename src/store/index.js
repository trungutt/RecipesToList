/* @flow */

import json from '../source/recipes';
import transformJsonResponse from '../utils/getStateFromJson';


const initialState = {
	...transformJsonResponse(json),
	openedRecipe: null,
	chosenRecipes: [],
};

export default initialState;
