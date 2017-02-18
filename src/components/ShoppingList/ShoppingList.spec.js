/* @flow */

import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { render } from 'enzyme';

import ShoppingList from './ShoppingList';


const setup = () => {
	/* eslint-disable quotes, quote-props*/
	const props = {
		shoppingList: {
			"Produce": {
				"cherry tomatoes": "237 ml",
				"cucumber": "237 ml",
				"avocado": "1 ",
				"red onion": "118 ml",
				"garlic": "2 cloves",
				"parsley": "15 ml",
			},
			"Condiments": {
				"olive oil": "15 ml",
			},
			"Spices": {
				"salt and freshly ground black pepper": "0 ",
			},
		},
	};
	/* eslint-enable */

	return render(<ShoppingList {...props} />);
};

describe('test ShoppingList Component', () => {
	it('renders a ShoppingList Component', () => {
		const wrapper = setup();
		expect(wrapper.find('h1').length).to.equal(1);
		expect(wrapper.find('div').length).to.equal(4);
	});
});

