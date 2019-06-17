import { createStore, combineReducers } from "redux";
import menuConfig from "reducers/menuConfig";

const rootReducer = combineReducers({
    menuConfig,
})

const store = createStore(rootReducer);

function configureStore() {
    return store
}

export default configureStore;