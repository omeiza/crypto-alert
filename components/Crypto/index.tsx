import { useEffect } from 'react';
import CryptoContent from './CryptoContent';
import CryptoFilters from "./CryptoFilters";
import { initialCoinList } from "../Helpers";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/reducer";
import { RootState } from "../../store";

const Crypto = (props: object): JSX.Element => {
    const CryptoStoreData: object = useSelector((state: RootState) => {
        return state.data;
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

        fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${allCryptoList}&tsyms=ARS`)
            .then((response) => { return response.json() })

            .then((data) => {
                updateData(data);
            })

            .catch((err) => { console.error(`Fetch error: ${err}`)})
    }

    useEffect(() => {
        getCryptoData();
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
                <CryptoContent data = { CryptoStoreData } />
            </table>
        </div>
    )
}

export default Crypto