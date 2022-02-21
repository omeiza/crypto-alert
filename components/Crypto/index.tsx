import { Component } from 'react';
import CryptoContent from './CryptoContent';
import CryptoFilters from "./CryptoFilters";

interface cryptoProps {}
interface cryptoState {
    crypto_result: any
}

class Crypto extends Component<cryptoProps, cryptoState> {
    constructor(props: any) {
        super(props);

        this.state = {
            crypto_result: null
        };
    }

    componentDidMount() {
        this.getCrytpoData();
    }

    cryptoObject() {
        return JSON.parse('[{"Bitcoin": "BTC","Ethereum": "ETH","Ripple": "XRP","Bitcoin Cash": "BCH","Cardano": "ADA","Litecoin": "LTC","Dash": "DASH","Monero": "XHR","Bitcoin Gold": "BTG","Ethereum Classic": "ETC","Zcash": "ZEC"}]');
    }

    objectToArray(thisObject: any): string[] {
        return Object.keys(thisObject).map((k) => {
            return thisObject[k]
        });
    }

    getCrytpoData(): void {
        let CryptoTypes = this.cryptoObject()
        let cryptoArray = this.objectToArray(CryptoTypes[0]),
            cryptoList: string[] = [];

        cryptoArray.map((j) => cryptoList.push(j));
        const allCryptoList: string = cryptoList.join(",");

        fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${allCryptoList}&tsyms=ARS`)
            .then((response) => {
                return response.json()
            })

            .then((data) => {
                console.log(data);
                this.setState({
                    crypto_result: data
                })
            })

            .catch((err) => {
                console.error(`Fetch error: ${err}`)
            })
    }

    render() {
        if (!this.state.crypto_result) {
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
                        <CryptoContent data = { this.state.crypto_result } />
                    </table>
                </div>
            )
        }
    }
}

export default Crypto