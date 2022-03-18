import { createSlice } from "@reduxjs/toolkit";

interface CryptoState {
    readonly data: object,
    readonly currency: string
}

const initialState: CryptoState = {
    data: {},
    currency: 'NGN'
}

const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        setCurrency(state, action) {
            state.currency = action.payload;
        },
        updateData(state, action) {
            state.data = action.payload;
        }
    }
});

const actions = cryptoSlice.actions;
export { actions, cryptoSlice }
