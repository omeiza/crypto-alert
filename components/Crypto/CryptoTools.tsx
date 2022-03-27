import Image from "next/image";
import Link from "next/link";

const CryptoTools = (): JSX.Element => {
    return (
        <div className="crypto__tools">
            <div className="crypto__tools_alert">
                <div className="crypto__tools_img">
                    <span>
                        <Image width = { 30 } height = { 30 } src="/img/crypto-alert-img.png" />
                    </span>
                </div>
                <div className="crypto__tools_content">
                    <h2>Crypto Price Alert</h2>
                    <p>Get customized crypto alerts based on market price and volume sent to your email</p>
                    <Link href="/alert">Create Alert</Link>
                </div>
            </div>
            <div className="crypto__tools_converter">
                <div className="crypto__tools_img">
                    <span>
                        <Image width = { 30 } height = { 30 }  src="/img/crypto-converter-img.png" />
                    </span>
                </div>
                <div className="crypto__tools_content">
                    <h2>Crypto Converter</h2>
                    <p>Use our Cryptocurrency converter and calculator tool</p>
                    <Link href="/convert">Create Alert</Link>
                </div>
            </div>
        </div>
    )
}

export default CryptoTools;