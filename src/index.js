import { createStore } from 'redux';

const reducer = (state, action) => {
	if (action.type === 'HEY') {
		return state + action.payload;
	}

	return state;
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
	reducer, /* preloadedState, */
	0,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

store.dispatch({ type: 'HEY', payload: 1 });
store.dispatch({ type: 'HEY', payload: 2 });
store.dispatch({ type: 'HEY', payload: 3 });
store.dispatch({ type: 'HEY', payload: 4 });
store.dispatch({ type: 'HEY', payload: 5 });
