/* @flow */

import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { render } from 'enzyme';

import Department from './Department';


const setup = () => {
	/* eslint-disable quotes, quote-props*/
	const props = {
		department: "Produce",
		ingredientsOfDepartement: {
			"cherry tomatoes": "237 ml",
			"cucumber": "237 ml",
			"avocado": "1 ",
			"red onion": "118 ml",
			"garlic": "2 cloves",
			"parsley": "15 ml",
		},
	};
	/* eslint-enable */

	return render(<Department {...props} />);
};

describe('test Department Component', () => {
	it('renders a Department component', () => {
		const wrapper = setup();
		expect(wrapper.find('p').length).to.equal(1);
		expect(wrapper.find('span').length).to.equal(1);
		expect(wrapper.find('ul').length).to.equal(1);
		expect(wrapper.find('li').length).to.equal(6);
	});
});
