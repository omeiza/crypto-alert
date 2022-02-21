import React from 'react';

type data = {
    [x: string]: any;
};

interface props {
    count: number;
    data: data;
}

const CryptoListItem = (props: props) => {
    const data: data = props.data,
        hrChange: string = data["ARS"]["CHANGEPCTHOUR"],
        twoFourHrChange: string = data["ARS"]["CHANGEPCT24HOUR"];

    let tickerHrChange: string = (parseFloat(hrChange) < 0) ? 'negative' : 'positive',
        tickerTwoFourHrChange: string = (parseFloat(twoFourHrChange)) < 0 ? 'negative' : 'positive';

    return (
        <tr>
            <td>{ props.count }</td>
            <td>{ data["ARS"]["FROMSYMBOL"] }</td>
            <td>{ data["ARS"]["PRICE"] }</td>
            <td>{ data["ARS"]["MKTCAP"] }</td>
            <td className = {`ticker ${tickerHrChange}`}>{ hrChange }%</td>
            <td className = {`ticker ${tickerTwoFourHrChange}`}>{ twoFourHrChange }%</td>
        </tr>
    )
}

export default CryptoListItem;