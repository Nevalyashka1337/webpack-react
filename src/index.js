import React from 'react'
import ReactDOM from 'react-dom'

import App from 'Components/App'

import { Provider } from 'react-redux'
import { configStore, history } from './store/index'
import { ConnectedRouter } from 'connected-react-router'

const store = configStore()

const Render = Component => {
	ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Component/>
		</ConnectedRouter>
	</Provider>
	, document.getElementById('root'))
}

Render(App)

if ( module.hot ) {
	module.hot.accept('./components/App', () => {
		const NextApp = require('./components/App').default
		Render(NextApp)
	})
}