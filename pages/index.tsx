import type { NextPage } from 'next'
import Head from 'next/head'
import Crypto from '../components/Crypto'
import { Provider } from "react-redux"
import store from './../store'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Crypto Alert</title>
                <meta name="description" content="Get alert about price changes and update for your Cryptocurrency" />
            </Head>
            <main>
                <h1> Get Bitcoin & crypto prices analysis in your mailbox. </h1>
                <Provider store = { store } >
                    <Crypto />
                </Provider>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Home
