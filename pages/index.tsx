import type { NextPage } from 'next'
import Head from 'next/head'
import CryptoBoard from '../components/Crypto'
import { Provider } from "react-redux"
import store from './../store'
import { getCryptoData } from "../components/Helpers"
import Footer from "../components/Footer";

interface Props {
    cryptoServerData?: object;
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
                    <small>For Free</small>
                </h1>
                <Provider store = { store } >
                    <CryptoBoard data = { cryptoServerData } />
                </Provider>
            </main>
            <Footer />
        </div>
    )
}

Home.getInitialProps = async (ctx) => {
    const selectedCurrency: string = 'USD',
        response = await getCryptoData(selectedCurrency),
        json = await response.json();

    return { cryptoServerData: json['DISPLAY'] }
}

export default Home;