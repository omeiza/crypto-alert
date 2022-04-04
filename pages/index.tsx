import type { NextPage } from 'next'
import Head from 'next/head'
import CryptoBoard from '../components/Crypto'
import { Provider } from "react-redux"
import store from './../store'
import { getCryptoData } from "../components/Helpers"
import Footer from "../components/Footer";

/**
 * @TODO
 * 1. Redux refactoring
 */

interface Props {
    cryptoServerData?: {
        data: { [key: string]: any },
        currency: string
    };
}

const Home: NextPage<Props> = ({ cryptoServerData }) => {
    if (!cryptoServerData) {
        return (
            <div>
                Hello
            </div>
        )
    }

    return (
        <div>
            <Head>
                <title>Crypto Alert</title>
                <meta name="description" content="Get alert about price changes and update for your Cryptocurrency" />
            </Head>
            <main>
                <h1>
                    Get Crypto Alerts.
                </h1>
                <Provider store = { store } >
                    <CryptoBoard currency = { cryptoServerData.currency } data = { cryptoServerData.data } />
                </Provider>
            </main>
            <Footer />
        </div>
    )
}

Home.getInitialProps = async (ctx) => {
    let selectedCurrency: string | string[] = 'USD';
    if (ctx.query.currency) selectedCurrency = ctx.query.currency;

    const response = await getCryptoData(selectedCurrency),
        json = await response.json();

    return { cryptoServerData: { data: json['DISPLAY'], currency: selectedCurrency } }
}

export default Home;