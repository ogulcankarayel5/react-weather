import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { WheatherActionTypes } from 'store/wheather/types';
import { weatherReducer } from 'store/wheather/reducer';

export const rootReducer = combineReducers({
    wheather: weatherReducer
});

export type AppActions = WheatherActionTypes;

export type AppState = ReturnType<typeof rootReducer>;

// const loggerMiddleware = createLogger();

export const middleware = [thunk as ThunkMiddleware<AppState, AppActions>];

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export const store = createStore<AppState, AppActions, {}, {}>(
    rootReducer,
    applyMiddleware(...middleware)
);
