/* @flow */

import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import AddRecipe from './AddRecipe';


const setup = () => {
	const props = {
		title: 'AddRecipe',
		onButtonClick: index => index,
	};

	return shallow(<AddRecipe {...props} />);
};

describe('test AddRecipe Component', () => {
	it('renders a AddRecipe button', () => {
		const wrapper = setup();
		expect(wrapper.find('IconButton').length).to.equal(1);
	});
});
