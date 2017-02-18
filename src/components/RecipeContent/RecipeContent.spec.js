/* @flow */

import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { render } from 'enzyme';

import RecipeContent from './RecipeContent';


const setup = () => {
	/* eslint-disable quotes, quote-props*/
	const props = {
		recipe: {
			"recipe_id": 1,
			"title": "Tomato Cucumber Avocado Salad",
			"image_name": "tomato-cucumber-avocado-salad.jpg",
			"instructions": "Add cherry tomatoes, cucumber, avocado, red onion and garlic in a medium salad bowl.\r\n\r\nSprinkle minced parsley. Pour olive oil over salad, and season with salt and pepper.\r\n\r\nNote: Add avocado right before serving if you are planning to refrigerate the salad.",
			"servings": 4,
			"ingredients": {
				"cherry tomatoes": "237 ml",
				"cucumber": "237 ml",
				"avocado": "1 ",
				"red onion": "118 ml",
				"garlic": "2 cloves",
				"parsley": "15 ml",
				"olive oil": "15 ml",
				"salt and freshly ground black pepper": "0 ",
			},
		},
	};
	/* eslint-enable */

	return render(<RecipeContent {...props} />);
};

describe('test RecipeContent Component', () => {
	it('renders a RecipeContent Component', () => {
		const wrapper = setup();
		expect(wrapper.find('h1').length).to.equal(1);
		expect(wrapper.find('h1').text()).to.equal('Tomato Cucumber Avocado Salad');
		expect(wrapper.find('p').length).to.equal(3);
		expect(wrapper.find('li').length).to.equal(8);
	});
});
