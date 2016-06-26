import 'babel-polyfill';
import React from 'react';
import DOM from 'react-dom';
import configureStore from './store/configureStore';

import App from './components/App.js';

const store = configureStore();

const render = (App, state) => {
	DOM.render(<App {...state} />, document.getElementById('root'));
};

store.subscribe(() => render(App, store.getState()));

store.dispatch({ type: 'APP_INIT' });

if (module.hot) {
	module.hot.accept('./components/App.js', () => {
		let newApp = require('./components/App.js').default;
		render(newApp, store.getState());
	});
}
