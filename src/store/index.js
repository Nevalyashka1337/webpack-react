import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import createRootReducer from '../reducers/index'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

export const history = createBrowserHistory()

export const configStore = () => {
	const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      )
    )
  )

	if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers/index', () => {
        store.replaceReducer(rootReducer)
      })
    }
	}

	return store
}