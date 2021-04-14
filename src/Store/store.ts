import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import messages from "./Slices/Messages";


const store = configureStore({
    reducer: {messages},
    middleware: [...getDefaultMiddleware()]
})

export type IStore = ReturnType<typeof store.getState>
export type IDispatch = typeof store.dispatch
export default store
