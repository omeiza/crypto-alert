import { useState, useEffect } from "react";
import Link from "next/link";
import { countryList, getCryptoData } from "../Helpers";
import { actions } from "../../store/reducer";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";

const CryptoFilters = (): JSX.Element => {
    const [currencies, setCurrencies] = useState({}),
        selectedStoreCurrency: string = useSelector((state: RootState) => { return state.currency; }),
        dispatch = useDispatch(),
        updateData = (CryptoData: {}) => {
            dispatch(actions.updateData(CryptoData))
        },
        setCurrency = (currencyABBR: string) => {
            getCryptoData(currencyABBR)
                .then((response) => { return response.json() })

                .then((cryptoData) => {
                    updateData({data: cryptoData['DISPLAY'], currency: currencyABBR});
                })

                .catch((err) => { console.error(`Fetch error: ${err}`)})
        };

    const getFilterData = async (): Promise<Object[]> => {
        return await countryList();
    }

    useEffect(() => {
        getFilterData()
            .then(( currencies) => {
                setCurrencies(currencies[0])
            })

            .catch(err => {
                console.log(`Error listing currencies: ${err}`)
            })
    }, [])

    const currencyOptions = (optionsObj: any) => {
        let optionsContent = [];
        for (const coin in optionsObj) {
            optionsContent.push (
                <option key={coin} value={coin}>{`${coin}: ${optionsObj[coin]}`}</option>
            );
        }

        return optionsContent;
    }

    return (
        <div className="filterSection">
            <div className="inputStyle currencySelector">
                <select value = { selectedStoreCurrency } onChange={ (e) => setCurrency(e.target.value) }>
                    { currencyOptions(currencies) }
                </select>
            </div>
            <div className="crypto__btn">
                <Link href='/alert'>Create Crypto Alert</Link>
            </div>
            <div className="crypto__btn">
                <Link href='/convert'>Crypto Converter</Link>
            </div>
        </div>
    );
}

export default CryptoFilters;