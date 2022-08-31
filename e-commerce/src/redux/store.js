import {legacy_createStore} from "redux"
import { combineReducers } from "redux"
import { compose } from "redux"
import { applyMiddleware } from "redux"
import thunk from "redux-thunk"
import {ProductsReducer} from "../redux/product/reducer"
import {cartReducer} from "../redux/cart/reducer"
import {currentProductReducer} from "../redux/currentProduct/reducer"


let composeEnhancers = compose;
composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const rootReducer = combineReducers({
    products: ProductsReducer,
    cart:cartReducer,
    currentProduct:currentProductReducer
})

export const store=legacy_createStore(rootReducer,enhancer)






