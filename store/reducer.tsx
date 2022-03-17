import { createSlice } from "@reduxjs/toolkit";

interface CryptoState {
    readonly data: object,
    currency: string
}

const initialState: CryptoState = {
    data: {},
    currency: ''
}

const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        addCurrency(state, action) {
            state.currency = action.payload;
        },
        updateData(state, action) {
            state.data = action.payload;
        }
    }
});

const actions = cryptoSlice.actions;
export { actions, cryptoSlice }
