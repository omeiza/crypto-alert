import { Component } from 'react';
import CryptoContent from './CryptoContent';
import CryptoFilters from "./CryptoFilters";
import { initialCoinList } from "../Helpers";

interface cryptoProps {}
interface cryptoState { cryptoResult: any }

class Crypto extends Component<cryptoProps, cryptoState> {
    constructor(props: any) {
        super(props);

        this.state = {
            cryptoResult: null
        };
    }

    componentDidMount() {
        this.getCryptoData();
    }

    // componentDidUpdate() {
    //     this.getCryptoData();
    // }

    getCryptoData(): void {
        const cryptoTypes: object[] = initialCoinList(),
            cryptoTypesObject = cryptoTypes[0],
            cryptoList: string[] = [];

        for (const coin in cryptoTypesObject) { // @ts-ignore
            cryptoList.push(cryptoTypesObject[coin]);
        }
        const allCryptoList: string = cryptoList.join(",");

        fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${allCryptoList}&tsyms=ARS`)
            .then((response) => { return response.json() })

            .then((data) => { this.setState({ cryptoResult: data }) })

            .catch((err) => { console.error(`Fetch error: ${err}`) })
    }

    render() {
        if (!this.state.cryptoResult) {
            // Work on a network issue message here
            return null;
        } else {
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
                        <CryptoContent data = { this.state.cryptoResult } />
                    </table>
                </div>
            )
        }
    }
}

export default Crypto