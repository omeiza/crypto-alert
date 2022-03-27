import { useEffect, useState } from 'react';
import CryptoContent from './CryptoContent';
import CryptoFilters from "./CryptoFilters";
import { getCryptoData } from "../Helpers";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/reducer";
import { RootState } from "../../store";

interface Props {
    data: { [key: string]: any };
}

const Crypto = (props: Props): JSX.Element => {
    // const selectedCurrency: string = useSelector((state: RootState) => {
    //         return state.currency;
    //     }),
    //     dispatch = useDispatch(),
    //     updateData = (cryptoData: object) => {
    //         dispatch(actions.updateData(cryptoData))
    //     };
    //
    // const updateCryptoData = (): void => {
    //     getCryptoData(selectedCurrency)
    //         .then((response) => { return response.json() })
    //
    //         .then((cryptoData) => {
    //             updateData({ data: cryptoData['DISPLAY'], currency: selectedCurrency })
    //         })
    //
    //         .catch((err) => { console.error(`Fetch error: ${err}`)})
    // }
    //
    // useEffect(() => {
    //     updateCryptoData();
    // }, [])

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
                    <th>Volume (1hr)</th>
                    <th>Volume (24hr)</th>
                    <th>1hr %</th>
                    <th>24hr %</th>
                    <th />
                </tr>
                </thead>
                <CryptoContent data = { props.data } />
            </table>
        </div>
    )
}

export default Crypto