/* @flow */

import React from 'react';
import styled from 'styled-components';


const Label = styled.span`
	font-weight: bold;
`;

type DepartmentArgs = {
	department: string,
	ingredientsOfDepartement: Object,
};
const Department = ({ department, ingredientsOfDepartement }: DepartmentArgs) => (
	<div>
		<p><Label>{department}</Label></p>
		<ul>
			{Object.keys(ingredientsOfDepartement).map(ingredient => <li
				key={ingredient}
			>
				{ingredient}: {ingredientsOfDepartement[ingredient]}
			</li>)}
		</ul>
	</div>
);

export default Department;
