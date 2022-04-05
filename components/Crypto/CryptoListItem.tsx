import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { RootState } from "../../store";
import React from "react";

interface props {
    count: number;
    name: string;
    currency: string,
    data: { [key: string]: any };
}

const CryptoListItem = (props: props) => {
    const currency = props.currency,
        data: { [key: string]: any } = props.data,
        hrChange: string = data[currency]["CHANGEPCTHOUR"],
        twoFourHrChange: string = data[currency]["CHANGEPCT24HOUR"];

    let tickerHrChange: string = (parseFloat(hrChange) < 0) ? 'negative' : 'positive',
        tickerTwoFourHrChange: string = (parseFloat(twoFourHrChange)) < 0 ? 'negative' : 'positive';

    return (
        <tr>
            <td>{ props.count }</td>
            <td className="with__img">
                <Image alt={ props.name } width = { 25 } height = { 25 } src={`https://www.cryptocompare.com${ data[currency]["IMAGEURL"] }`} />
                { props.name }
            </td>
            <td className="price">{ data[currency]["PRICE"] }</td>
            <td>{ data[currency]["MKTCAP"] }</td>
            <td>
                { data[currency]["VOLUMEHOURTO"] }
            </td>
            <td>
                { data[currency]["VOLUME24HOURTO"] }
            </td>
            <td className = {`ticker ${tickerHrChange}`}>{ hrChange }%</td>
            <td className = {`ticker ${tickerTwoFourHrChange}`}>{ twoFourHrChange }%</td>
            <td className = "actions">
                <Link href={`/alert/${ props.name }`}>Alert</Link>
            </td>
        </tr>
    )
}

export default CryptoListItem;