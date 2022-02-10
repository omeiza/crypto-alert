import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Crypto from '../components/Crypto'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Crypto Alert</title>
                <meta name="description" content="Get alert about price changes and update for your Cryptocurrency" />
            </Head>
            <main>
                <h1>
                    Get Bitcoin & crypto price analysis in your mailbox.
                </h1>
                <Crypto />
            </main>
            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    )
}

export default Home
