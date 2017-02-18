import React from 'react';

// TODO: flow config, refactor component
const RecipeContent = ({ recipe }) => {
	if (recipe) {
		const { ingredients } = recipe;
		return (
			<div>
				<div> Title : </div>
				<div>{recipe.title}</div>
				<div> Instructions : </div>
				<div>{recipe.instructions}</div>
				<div> Ingredients: </div>
				{Object.keys(ingredients).map((key) => {
					return <div key={key}>{key} : {ingredients[key]}</div>
				})}
			</div>
		);
	}

	return (
		<div>No recipe chosen</div>
	);
};

export default RecipeContent;
