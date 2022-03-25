import Image from "next/image";

const CryptoTools = (): JSX.Element => {
    return (
        <div className="crypto__tools">
            <div className="crypto__tools_alert">
                <div className="crypto__tools_img">
                    <Image width = { 50 } height = { 50 } src="/img/crypto-alert-img.png" />
                </div>
                <div className="crypto__tools_content">
                    <h2>Crypto Price Alert</h2>
                    <p>Get customized crypto alerts based on market price and volume sent to your email</p>
                </div>
            </div>
            <div className="crypto__tools_converter">
                <div className="crypto__tools_img">
                    <Image width = { 50 } height = { 50 }  src="/img/crypto-converter-img.png" />
                </div>
                <div className="crypto__tools_content">
                    <h2>Crypto Converter</h2>
                    <p>Use our Cryptocurrency converter and calculator tool</p>
                </div>
            </div>
        </div>
    )
}

export default CryptoTools;