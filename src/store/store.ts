import {configureStore} from "@reduxjs/toolkit";
import cityReducer from './slices/citySlice'

export const store = configureStore({
    reducer: {
        cityReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch