import { createStore } from 'redux'
import rootReducer from '../reducers/index'

export const configStore = () => {
	const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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