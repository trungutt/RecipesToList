import React from 'react';

// TODO: flow config, refactor component
const ShoppingList = ({ shoppingList }) => {
	if (Object.keys(shoppingList).length !== 0) {
		return (
			<div>
				{Object.keys(shoppingList).map((department) => {
					return (
						<div key={department}>
							<div>Categories : {department}</div>
							{Object.keys(shoppingList[department]).map(ingredient => <div key={ingredient}>{ingredient} : {shoppingList[department][ingredient]}</div>)}
						</div>
					);
				})}
			</div>
		);
	}

	return (
		<div>No recipe chosen</div>
	);
};

export default ShoppingList;
