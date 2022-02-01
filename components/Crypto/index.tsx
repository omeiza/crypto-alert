import { Component } from 'react';
import CryptoContent from './CryptoContent';

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

    getCrytpoData() {
        let CryptoTypes = this.cryptoObject()
        let cryptoArray = this.objectToArray(CryptoTypes[0]),
            cryptoList: string[] = [];

        cryptoArray.map((j) => cryptoList.push(j));
        const allCryptoList: string = cryptoList.join(",");

        fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${allCryptoList}&tsyms=USD`)
            .then((response) => {
                return response.json()
            })

            .then((data) => {
                this.setState({
                    crypto_result: data
                })
            })

            .catch((err) => {
                console.error(`Fetch error: ${err}`)
            })
    }

    render() {
        // @ts-ignore
        if (!this.state.crypto_result) {
            return (
                <p> Loading... </p>
            )
        } else {
            return (
                <table className="crypto__list">
                    <thead className="crypto__list--header">
                        <tr>
                            <th>#</th>
                            <th>Crypto</th>
                            <th>Price</th>
                            <th>Circulating Supply</th>
                            <th>Change (24h)</th>
                        </tr>
                    </thead>
                    <CryptoContent data = { this.state.crypto_result } />
                </table>
            )
        }
    }
}

export default Crypto