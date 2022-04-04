import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { countryList } from "../Helpers";

interface Props {
    currency: string
}

const CryptoFilters = (props: Props): JSX.Element => {
    const router = useRouter(),
        [currencies, setCurrencies] = useState({}),
        [selectedCurrency, setSelectedCurrency] = useState(props.currency),
        currencyOptions = (optionsObj: any) => {
            let optionsContent = [];
            for (const coin in optionsObj) {
                optionsContent.push (
                    <option key={coin} value={coin}>{`${coin}: ${optionsObj[coin]}`}</option>
                );
            }

            return optionsContent;
        },
        getFilterData = async (): Promise<Object[]> => {
            return await countryList();
        },
        setCurrency = (currency: string) => {
            router.push(`/?currency=${ currency }`)
                .then(() => setSelectedCurrency(currency));
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

    return (
        <div className="filterSection">
            <div className="inputStyle currencySelector">
                <select value = { selectedCurrency } onChange={ (e) => setCurrency(e.target.value) }>
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