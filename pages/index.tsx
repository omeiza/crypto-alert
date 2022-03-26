import type { NextPage } from 'next'
import Head from 'next/head'
import CryptoBoard from '../components/Crypto'
import { Provider } from "react-redux"
import store from './../store'
import { getCryptoData } from "../components/Helpers";

interface Props {
    cryptoServerData?: object;
}

interface data {
    data: object
}

const Home: NextPage<Props> = ({ cryptoServerData }) => {
    return (
        <div>
            <Head>
                <title>Crypto Alert</title>
                <meta name="description" content="Get alert about price changes and update for your Cryptocurrency" />
            </Head>
            <main>
                <h1> Get Bitcoin & crypto prices analysis in your mailbox. </h1>
                <Provider store = { store } >
                    <CryptoBoard data = { cryptoServerData } />
                </Provider>
            </main>
            <footer />
        </div>
    )
}

Home.getInitialProps = async (ctx) => {
    const selectedCurrency: string = 'USD',
        response = await getCryptoData(selectedCurrency),
        json = await response.json();

    return { cryptoServerData: json['DISPLAY'] }
}

export default Home
