import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AppReducer from '../reducers';
import { NavigatorMiddleware } from '../navigators/AppNavigator'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const persistConfig = {
    key: 'ruangdokter',
    storage: storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, AppReducer);
const middlewares = [NavigatorMiddleware, thunk, logger];
export const store = createStore(pReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);