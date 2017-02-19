/* @flow */

import React from 'react';

import Department from '../Department/Department';
import Title from '../Common/Title';


const ShoppingList = ({ shoppingList }: Object) => {
	if (shoppingList && Object.keys(shoppingList).length !== 0) {
		return (
			<div>
				<Title>Shopping List</Title>
				{Object.keys(shoppingList).map(department => <Department
					key={department}
					department={department}
					ingredientsOfDepartement={shoppingList[department]}
				/>)}
			</div>
		);
	}

	return (
		<div>No recipe chosen</div>
	);
};

export default ShoppingList;
