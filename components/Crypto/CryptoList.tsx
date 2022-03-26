import React from 'react';
import CryptoListItem from './CryptoListItem';
import {useSelector} from "react-redux";
import {RootState} from "../../store";

interface Props {
    data: object
}

const CryptoList = (props: Props) => {
    let count = 0;
    // const data: object = useSelector((state: RootState) => {
    //     return state.data;
    // });
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
                        <CryptoListItem key={count} count={count} name={k} data={data[k]} />
                    )
                })
            }
        </>
    );
}

export default CryptoList;