import { useEffect } from 'react';
import CryptoContent from './CryptoContent';
import CryptoFilters from "./CryptoFilters";
import { initialCoinList } from "../Helpers";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/reducer";
import { RootState } from "../../store";

const Crypto = (): JSX.Element => {
    const selectedCurrency: string = useSelector((state: RootState) => {
            return state.currency;
        }),
        dispatch = useDispatch(),
        updateData = (CryptoData: {}) => {
            dispatch(actions.updateData(CryptoData))
        };

    const getCryptoData = (): void => {
        const cryptoTypes: object[] = initialCoinList(),
            cryptoTypesObject = cryptoTypes[0],
            cryptoList: string[] = [];

        for (const coin in cryptoTypesObject) { // @ts-ignore
            cryptoList.push(cryptoTypesObject[coin]);
        }
        const allCryptoList: string = cryptoList.join(",");

        // console.log(selectedCurrency);
        fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${allCryptoList}&tsyms=${selectedCurrency}`)
            .then((response) => { return response.json() })

            .then((data) => {
                console.log(data, selectedCurrency);
                updateData(data);
            })

            .catch((err) => { console.error(`Fetch error: ${err}`)})
    }

    useEffect(() => {
        getCryptoData();
        // console.log(selectedCurrency)
    }, [selectedCurrency])

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