import React, {JSXElementConstructor} from 'react';

type data = {
    [x: string]: any;
};

interface props {
    count: number;
    data: data;
}

const CryptoListItem = (props: props) => {
    const data: data = props.data,
        hrChange: string = data["NGN"]["CHANGEPCTHOUR"],
        twoFourHrChange: string = data["NGN"]["CHANGEPCT24HOUR"];

    let tickerHrChange: string = (parseFloat(hrChange) < 0) ? 'negative' : 'positive',
        tickerTwoFourHrChange: string = (parseFloat(twoFourHrChange)) < 0 ? 'negative' : 'positive';

    return (
        <tr>
            <td>{ data["NGN"]["FROMSYMBOL"] }</td>
            <td>{ data["NGN"]["PRICE"] }</td>
            <td>{ data["NGN"]["MKTCAP"] }</td>
            <td className = {`ticker ${tickerHrChange}`}>{ hrChange }%</td>
            <td className = {`ticker ${tickerTwoFourHrChange}`}>{ twoFourHrChange }%</td>
            <td><a className="triggerBtn">Alert</a></td>
        </tr>
    )
}

export default CryptoListItem;