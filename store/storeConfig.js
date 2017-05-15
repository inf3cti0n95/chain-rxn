import {createStore, applyMiddleware, combineReducers} from "redux";
import {boxReducer,userReducer} from "./reducers/reducers";
export default function configStore () {

    let reducers = combineReducers({
        box: boxReducer,
        user: userReducer
    });
    let store = createStore(reducers);
    return store;
}