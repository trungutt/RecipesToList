import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

import StarBorder from 'material-ui/svg-icons/toggle/star-border';

// TODO: flow config
const RecipesList = ({ recipes, onClick, onButtonClick }) => (
	<GridList>
		{recipes.map((recipe, index) =>
			<GridTile
				key={recipe.recipe_id}
				title={recipe.title}
				actionIcon={<IconButton onClick={(e) => {
					e.preventDefault();
					onButtonClick(recipe.title);
				}}><StarBorder color="white" /></IconButton>}
				onClick={(e) => {
					e.preventDefault();
					onClick(recipe.title);
				}}
			>
				<img alt={recipe.title} src={`source/images/${recipe.image_name}`} />
			</GridTile>,
		)}
	</GridList>
);

export default RecipesList;
