/* @flow */

import React from 'react';
import styled from 'styled-components';

import Department from '../Department/Department';


const Title = styled.h1`
	color: red;
`;

const ShoppingList = ({ shoppingList }: Object) => {
	if (Object.keys(shoppingList).length !== 0) {
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
