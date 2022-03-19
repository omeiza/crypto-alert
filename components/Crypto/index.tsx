import { useEffect, useState } from 'react';
import CryptoContent from './CryptoContent';
import CryptoFilters from "./CryptoFilters";
import { getCryptoData } from "../Helpers";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/reducer";
import store, { RootState } from "../../store";

const Crypto = (): JSX.Element => {
    const selectedCurrency: string = useSelector((state: RootState) => {
            return state.currency;
        }),
        dispatch = useDispatch(),
        updateData = (cryptoData: object): Promise<any> => new Promise((resolve, reject) => {
            resolve(dispatch(actions.updateData(cryptoData)));
        });

    const updateCryptoData = (): void => {
        getCryptoData(selectedCurrency)
            .then((response) => { return response.json() })

            .then((cryptoData) => {
                updateData({ data: cryptoData['DISPLAY'], currency: selectedCurrency })
                    // .then((a) => {
                    //     console.log(store.getState().data);
                    // })
            })

            .catch((err) => { console.error(`Fetch error: ${err}`)})
    }

    useEffect(() => {
        updateCryptoData();
    }, [])

    return (
        <div className="crypto__container">
            <CryptoFilters />
            <table className="crypto__list">
                <thead className="crypto__list--header">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>MKT CAP</th>
                        <th>% Chng (1h)</th>
                        <th>% Chng (24h)</th>
                    </tr>
                </thead>
                <CryptoContent />
            </table>
        </div>
    )
}

export default Crypto