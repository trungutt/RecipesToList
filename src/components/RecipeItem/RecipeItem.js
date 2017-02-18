import React from 'react';
import { GridTile } from 'material-ui/GridList';

import AddRecipe from '../AddRecipe/AddRecipe';


type Recipe = {
	recipe_id: number,
	title: string,
	image_name: string,
	instructions: string,
	servings: number,
	ingredients: Object,
};
type AddRecipeArgs = {
	recipe: Recipe,
	onClick: Function,
	onButtonClick: Function,
};

const RecipeItem = ({ recipe, onClick, onButtonClick }: AddRecipeArgs) => (
	<GridTile
		key={recipe.recipe_id}
		title={recipe.title}
		actionIcon={<AddRecipe title={recipe.title} onButtonClick={onButtonClick} />
		}
		onClick={(e) => {
			e.preventDefault();
			onClick(recipe.title);
		}}
	>
		<img alt={recipe.title} src={`source/images/${recipe.image_name}`} />
	</GridTile>
);

export default RecipeItem;
