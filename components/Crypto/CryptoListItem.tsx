import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { RootState } from "../../store";
import React, { useState } from "react";

interface props {
    count: number;
    name: string;
    data: { [key: string]: any };
}

const CryptoOptions = (props: { name: string }): JSX.Element => {
    return (
        <div className="crypto__options">
            <span><Link href={`/alert/${ props.name }`}>Alert</Link></span>
            <span><Link href={`/convert/${ props.name }`}>Convert</Link></span>
        </div>
    )
}

const CryptoListItem = (props: props) => {
    const [ showCryptoOptions, setShowCryptoOptions ] = useState(false);

    const selectedCurrency: string = useSelector((state: RootState) => {
        return state.currency;
    });

    const toggleCryptoOptions = (): void => !showCryptoOptions ? setShowCryptoOptions(true) : setShowCryptoOptions(false);

    const data: { [key: string]: any } = props.data,
        hrChange: string = data[selectedCurrency]["CHANGEPCTHOUR"],
        twoFourHrChange: string = data[selectedCurrency]["CHANGEPCT24HOUR"];

    let tickerHrChange: string = (parseFloat(hrChange) < 0) ? 'negative' : 'positive',
        tickerTwoFourHrChange: string = (parseFloat(twoFourHrChange)) < 0 ? 'negative' : 'positive';

    return (
        <tr>
            <td>{ props.count }</td>
            <td className="withIMG">
                <img alt={ props.name } width = {25} src={`https://www.cryptocompare.com${ data[selectedCurrency]["IMAGEURL"] }`} />
                { props.name }
            </td>
            <td>{ data[selectedCurrency]["PRICE"] }</td>
            <td>{ data[selectedCurrency]["MKTCAP"] }</td>
            <td className = {`ticker ${tickerHrChange}`}>{ hrChange }%</td>
            <td className = {`ticker ${tickerTwoFourHrChange}`}>{ twoFourHrChange }%</td>
            <td className = "actions">
                <span className="imgWrapper">
                    <Image width = { 19 } height = { 5 } onClick = { toggleCryptoOptions } src = '/img/options-svgrepo-com.png' />
                </span>
                { showCryptoOptions ? <CryptoOptions name = { props.name }  /> : null }
            </td>
        </tr>
    )
}

export default CryptoListItem;