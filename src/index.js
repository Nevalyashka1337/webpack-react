import React from 'react'
import ReactDOM from 'react-dom'

import App from 'Components/App'

import { Provider } from 'react-redux'
import { configStore } from './store/index'

const store = configStore()

const Render = Component => {
	ReactDOM.render(
	<Provider store={store}>
		<Component/>
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