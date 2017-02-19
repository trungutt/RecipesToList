/* @flow */

import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import RecipesList from '../../components/RecipesList/RecipesList';
import selectors from '../App/selectors';
import getRecipesList from './selectors';


const selectRecipesList = createSelector(
	selectors.recipesSelector,
	getRecipesList,
);

const mapStateToProps = state => ({
	recipes: selectRecipesList(state),
});

const mapDispatchToProps = dispatch => ({
	onClick: (recipeTitle) => {
		// TODO:move to actions.js
		dispatch({ type: 'SHOW_RECIPE', payload: recipeTitle });
	},
	onButtonClick: (recipeTitle) => {
		// TODO:move to actions.js
		dispatch({ type: 'ADD_RECIPE', payload: recipeTitle });
	},
});

const RecipesListContainer = connect(mapStateToProps, mapDispatchToProps)(RecipesList);

export default RecipesListContainer;
