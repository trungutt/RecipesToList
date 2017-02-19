/* @flow */

import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import ShoppingList from '../../components/ShoppingList/ShoppingList';
import selectors from '../App/selectors';
import getShoppingList from './selectors';


const selectShoppingList = createSelector(
	selectors.recipesSelector,
	selectors.chosenRecipesSelector,
	selectors.ingredientsSelector,
	getShoppingList,
);

const mapStateToProps = state => ({
	shoppingList: selectShoppingList(state),
});

const IngredientsListContainer = connect(mapStateToProps)(ShoppingList);
export default IngredientsListContainer;
