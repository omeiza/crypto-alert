import React, {JSXElementConstructor} from 'react';

interface props {
    count: number;
    data: {
        [x: string]: any;
    };
}

const CryptoListItem = (props: props) => {
    const index = props.count,
        data = props.data;

    return (
        <tr>
            <td>{ index }</td>
            <td>{ data["USD"]["FROMSYMBOL"] }</td>
            <td>{ data["USD"]["PRICE"] }</td>
            <td>{ data["USD"]["SUPPLY"] }</td>
            <td>{ data["USD"]["CHANGE24HOUR"] }</td>
        </tr>
    )
}

export default CryptoListItem;