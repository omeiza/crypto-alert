import { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";

const Alert:NextPage = () => {
    return (
        <div>
            <Head>a
                <title>Crypto Alert</title>
                <meta name="description" content="Get alert about price changes and update for your Cryptocurrency" />
            </Head>
            <main>
                <h1>
                     Create Crypto Alert.
                </h1>
            </main>
            <Footer />
        </div>
    )
}

export default Alert;