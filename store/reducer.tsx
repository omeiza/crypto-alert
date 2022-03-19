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
        updateData(state, action) {
            return { ...state, data: action.payload.data, currency: action.payload.currency };
        }
    }
});

const actions = cryptoSlice.actions;
export { actions, cryptoSlice }
