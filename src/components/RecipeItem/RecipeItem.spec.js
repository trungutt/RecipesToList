/* @flow */

import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import RecipeItem from './RecipeItem';


const setup = () => {
	/* eslint-disable quotes, quote-props*/
	const recipe = {
		recipe_id: 1,
		title: "Tomato Cucumber Avocado Salad",
		image_name: "tomato-cucumber-avocado-salad.jpg",
		instructions: "Add cherry tomatoes, cucumber, avocado, red onion and garlic in a medium salad bowl. Sprinkle minced parsley. Pour olive oil over salad, and season with salt and pepper. Note: Add avocado right before serving if you are planning to refrigerate the salad.",
		servings: 4,
		ingredients: {
			"cherry tomatoes": 237,
			"cucumber": 237,
			"avocado": 1,
			"red onion": 118,
			"garlic": 2,
			"parsley": 15,
			"olive oil": 15,
			"salt and freshly ground black pepper": 0,

		},
	};
	/* eslint-enable */
	const onClick = title => title;
	const onButtonClick = title => title;

	const props = {
		recipe,
		onClick,
		onButtonClick,
	};

	return shallow(<RecipeItem {...props} />);
};

describe('test AddRecipe Component', () => {
	it('renders a AddRecipe button', () => {
		const wrapper = setup();
		expect(wrapper.find('GridTile').length).to.equal(1);
	});
});
