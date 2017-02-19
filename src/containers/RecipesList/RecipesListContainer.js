/* @flow */

import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import RecipesList from '../../components/RecipesList/RecipesList';
import selectors from '../App/selectors';
import getRecipesList from './selectors';

import actions from './constants';


const selectRecipesList = createSelector(
	selectors.recipesSelector,
	getRecipesList,
);

const mapStateToProps = state => ({
	recipes: selectRecipesList(state),
});

const mapDispatchToProps = dispatch => ({
	onClick: (recipeTitle) => {
		dispatch({ type: actions.SHOW_RECIPE, payload: recipeTitle });
	},
	onButtonClick: (recipeTitle) => {
		dispatch({ type: actions.ADD_RECIPE, payload: recipeTitle });
	},
});

const RecipesListContainer = connect(mapStateToProps, mapDispatchToProps)(RecipesList);

export default RecipesListContainer;
