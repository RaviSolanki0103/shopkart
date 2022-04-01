
import storage from 'redux-persist/lib/storage';
import rootReducer from "./reducers";
import {
    persistReducer,persistStore
} from 'redux-persist';
import { createStore } from 'redux';
const persistConfig = {
    key: 'root',
    storage,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
