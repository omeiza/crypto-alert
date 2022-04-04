import { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";

const Convert:NextPage = () => {
    return (
        <div>
            <Head>
                <title>Crypto Alert</title>
                <meta name="description" content="Get alert about price changes and update for your Cryptocurrency" />
            </Head>
            <main>
                <h1>
                    Crypto Converter.
                </h1>
            </main>
            <Footer />
        </div>
    )
}

export default Convert;