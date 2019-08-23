import { createStore, applyMiddleware, compose } from 'redux'
import { persistCombineReducers, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { createEpicMiddleware } from 'redux-observable'
import reducers from './reducers'
import rootEpics from './epic'
import Reactotron from '../configs/ReactotronConfig'

const persistConfig = {
  key: 'root',
  storage,
}
const epicMiddleware = createEpicMiddleware()
const composeEnhancers = __DEV__ ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose
const store = createStore(
  persistCombineReducers(persistConfig, reducers),
  composeEnhancers(applyMiddleware(epicMiddleware), Reactotron.createEnhancer()),
)
persistStore(store)
epicMiddleware.run(rootEpics)
export default store
