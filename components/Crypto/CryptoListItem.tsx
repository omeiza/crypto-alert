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

const CryptoListItem = (props: props) => {
    const selectedCurrency: string = useSelector((state: RootState) => {
        return state.currency;
    });

    const data: { [key: string]: any } = props.data,
        hrChange: string = data[selectedCurrency]["CHANGEPCTHOUR"],
        twoFourHrChange: string = data[selectedCurrency]["CHANGEPCT24HOUR"];

    let tickerHrChange: string = (parseFloat(hrChange) < 0) ? 'negative' : 'positive',
        tickerTwoFourHrChange: string = (parseFloat(twoFourHrChange)) < 0 ? 'negative' : 'positive';

    return (
        <tr>
            <td>{ props.count }</td>
            <td className="withIMG">
                <Image alt={ props.name } width = { 25 } height = { 25 } src={`https://www.cryptocompare.com${ data[selectedCurrency]["IMAGEURL"] }`} />
                { props.name }
            </td>
            <td>{ data[selectedCurrency]["PRICE"] }</td>
            <td>{ data[selectedCurrency]["MKTCAP"] }</td>
            <td>
                { data[selectedCurrency]["VOLUMEHOURTO"] }
            </td>
            <td>
                { data[selectedCurrency]["VOLUME24HOURTO"] }
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