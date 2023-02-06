import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "../features/Home/Cart/cart-reducer";
import thunk from "redux-thunk"
import {devicesReducer} from "../features/Home/Devices/devices-reducer";

const rootreducer = combineReducers({
    cart: cartReducer,
    devices: devicesReducer
})

export const store = configureStore({
    reducer: rootreducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .prepend(thunk)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch