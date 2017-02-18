/* @flow */

import React from 'react';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Star from 'material-ui/svg-icons/toggle/star';


type AddRecipeArgs = {
	title: string,
	onButtonClick: Function,
};
const AddRecipe = ({ title, onButtonClick }: AddRecipeArgs) => (
	<IconButton
		onClick={(e) => {
			e.preventDefault();
			onButtonClick(title);
		}}
	>
		<StarBorder color="black" />
	</IconButton>
);

export default AddRecipe;
