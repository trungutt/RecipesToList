import { connect } from 'react-redux';

import RecipesList from '../components/RecipesList';

// TODO: move to selectors.js
const selector = (entities) => {
	const { recipes } = entities;

	const recipesList = [];
	for (const key in recipes) {
		recipesList.push(recipes[key]);
	}

	return recipesList;
};

const mapStateToProps = ({ entities }) => ({
	recipes: selector(entities),
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
