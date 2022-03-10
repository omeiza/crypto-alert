import type { NextPage } from 'next'
import Head from 'next/head'
import Crypto from '../components/Crypto'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Crypto Alert</title>
                <meta name="description" content="Get alert about price changes and update for your Cryptocurrency" />
            </Head>
            <main>
                <h1> Get Bitcoin & crypto price analysis in your mailbox. </h1>
                <Crypto />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Home
