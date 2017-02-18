/* @flow */

import React from 'react';
import styled from 'styled-components';


type RecipeContentArgs = {
	recipe: {
		recipe_id: number,
		title: string,
		image_name: string,
		instructions: string,
		servings: number,
		ingredients: Object,
	}
};

// TODO: move to different components
const Title = styled.h1`
	color: red;
`;
const Label = styled.span`
	font-weight: bold;
`;

const RecipeContent = ({ recipe }: RecipeContentArgs) => {
	if (recipe) {
		const { title, instructions, servings, ingredients } = recipe;
		return (
			<div>
				<Title>{title}</Title>
				<p><Label>Servings</Label> : {servings}</p>
				<p><Label>Instructions</Label> : {instructions}</p>
				<p><Label>Ingredients</Label></p>
				<ul>
					{Object.keys(ingredients).map(key => <li key={key}>{key} : {ingredients[key]}</li>)}
				</ul>
			</div>
		);
	}

	return (
		<div>No recipe chosen</div>
	);
};

export default RecipeContent;
