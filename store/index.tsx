import { configureStore } from "@reduxjs/toolkit";
import { cryptoSlice } from './reducer';

const store = configureStore({
    reducer: cryptoSlice.reducer
});

export type RootState = ReturnType<typeof store.getState>
export default store;