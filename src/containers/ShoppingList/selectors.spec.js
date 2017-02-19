/* @flow */

import { describe, it } from 'mocha';
import { expect } from 'chai';

import { sum } from './selectors';


// TODO: check all other selectors
describe('test ShoppingList selectors', () => {
	it('should return sum', () => {
		const accumulator = 1;
		const quantity = 2.5;

		const expectedSum = 3.5;

		expect(sum(accumulator, quantity)).to.deep.equal(expectedSum);
	});
});
