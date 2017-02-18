/* @flow */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';

import RecipesListContainer from './containers/RecipesListContainer';
import RecipeContentContainer from './containers/RecipeContentContainer';
import ShoppingListContainer from './containers/ShoppingListContainer';


/* Needed for onTouchTap */
injectTapEventPlugin();

// TODO move to different components
const Parent = styled.div`
	display: flex;
`;
const Left = styled.div`
	flex-grow: 1;
	width: 50%;
`;
const Right = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	width: 50%;
`;

const App = () => (
	<MuiThemeProvider>
		<Parent>
			<Left>
				<RecipesListContainer />
			</Left>
			<Right>
				<RecipeContentContainer />
				<Divider />
				<ShoppingListContainer />
			</Right>
		</Parent>
	</MuiThemeProvider>
);

export default App;
