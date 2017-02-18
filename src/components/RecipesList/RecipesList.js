/* @flow */

import React from 'react';
import { GridList } from 'material-ui/GridList';

import RecipeItem from '../RecipeItem/RecipeItem';


type RecipesListArgs = {
	recipes: Object,
	onClick: Function,
	onButtonClick: Function,
};

const RecipesList = ({ recipes, onClick, onButtonClick }: RecipesListArgs) => (
	<GridList>
		{Object.keys(recipes).map(key => <RecipeItem
			key={key}
			recipe={recipes[key]}
			onClick={onClick}
			onButtonClick={onButtonClick}
		/>)}
	</GridList>
);

export default RecipesList;
