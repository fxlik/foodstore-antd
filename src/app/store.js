import { combineReducers, legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from '../features/Auth/reducer'

// composer enhancer konek dengan chrome devtool redux
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// gabung reducer
const rootReducers = combineReducers({
    auth: authReducer
})

const store = createStore(rootReducers, composerEnhancer(applyMiddleware(thunk)))

export default store