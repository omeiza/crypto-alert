import { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import CryptoFilters from "../../components/Crypto/CryptoFilters";
import CryptoContent from "../../components/Crypto/CryptoContent";

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
                <div className="crypto__container">
                    <div className="converter__section">
                        <div className="converter__tool">
                            <div className="input__style currency__selector">
                                <label>Amount</label>
                                <select>
                                    <option value="AED">AED: United Arab Emirates Dirham</option>
                                    <option value="ALL">ALL: Albanian Lek</option>
                                </select>
                            </div>
                            <div className="input__style currency__selector">
                                <label>From</label>
                                <select>
                                    <option value="AED">AED: United Arab Emirates Dirham</option>
                                    <option value="ALL">ALL: Albanian Lek</option>
                                </select>
                            </div>
                            <div className="input__style currency__selector">
                                <label>To</label>
                                <select>
                                    <option value="AED">AED: United Arab Emirates Dirham</option>
                                    <option value="ALL">ALL: Albanian Lek</option>
                                </select>
                            </div>
                        </div>
                        <div className="input__style currency__selector">
                            <div className="converter__result">
                                1 BTC (Bitcoin)
                                <span>=</span>
                                $ 43,794
                            </div>
                            <div className="converter__action">
                                <button>Refresh</button>
                            </div>
                        </div>
                        {/*<div className="crypto__btn"><a href="/alert">Create Crypto Alert</a></div>*/}
                        {/*<div className="crypto__btn"><a href="/convert">Crypto Converter</a></div>*/}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Convert;