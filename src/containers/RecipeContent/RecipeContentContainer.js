/* @flow */

import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import RecipeContent from '../../components/RecipeContent/RecipeContent';
import selectors from '../App/selectors';
import getOpenedRecipeContent from './selectors';


const selectOpenedRecipeContent = createSelector(
	selectors.recipesSelector,
	selectors.ingredientsSelector,
	selectors.openedRecipeSelector,
	getOpenedRecipeContent,
);

const mapStateToProps = state => ({
	recipe: selectOpenedRecipeContent(state),
});

const RecipeContentContainer = connect(mapStateToProps)(RecipeContent);
export default RecipeContentContainer;
