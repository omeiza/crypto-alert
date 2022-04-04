import React from 'react';
import CryptoListItem from './CryptoListItem';

interface Props {
    currency: string,
    data: { [key: string]: any };
}

const CryptoList = (props: Props) => {
    let count = 0;
    const data: object = props.data;

    if (!data) {
        return (
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
            </tr>
        );
    }

    return (
        <>
            {
                Object.keys(data).map((k) => {
                    count++;

                    return (
                        <CryptoListItem key={count} count={count} name={k} currency = { props.currency } data={data[k]} />
                    )
                })
            }
        </>
    );
}

export default CryptoList;