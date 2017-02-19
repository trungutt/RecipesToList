import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './containers/App/App';
import initialState from './store';

import reducer from './containers/RecipesList/reducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
	reducer, /* preloadedState, */
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
