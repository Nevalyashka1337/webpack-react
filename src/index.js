import React from 'react'
import ReactDOM from 'react-dom'

import App from 'Components/App'

const Render = Component => {
	ReactDOM.render(<Component/>, document.getElementById('root'))
}

Render(App)

if ( module.hot ) {
	module.hot.accept('./components/App', () => {
		const NextApp = require('./components/App').default
		Render(NextApp)
	})
}