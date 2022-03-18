import React from 'react';
import CryptoListItem from './CryptoListItem';
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const CryptoList = () => {
    let count = 0;
    const cryptoStoreData: any = useSelector((state: RootState) => {
            return state.data;
        });

    // console.log(cryptoStoreData);

    const data: object = cryptoStoreData['DISPLAY'];

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
                        <CryptoListItem key = { count } count = { count } data = { data[k] }/>
                    )
                })
            }
        </>
    );
}

export default CryptoList;