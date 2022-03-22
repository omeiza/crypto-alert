import { useSelector,  } from "react-redux";
import { RootState } from "../../store";

type data = {
    [x: string]: any;
};

interface props {
    count: number;
    name: string;
    data: data;
}

const CryptoListItem = (props: props) => {
    const selectedCurrency: string = useSelector((state: RootState) => {
        return state.currency;
    });

    const data: data = props.data,
        hrChange: string = data[selectedCurrency]["CHANGEPCTHOUR"],
        twoFourHrChange: string = data[selectedCurrency]["CHANGEPCT24HOUR"];

    let tickerHrChange: string = (parseFloat(hrChange) < 0) ? 'negative' : 'positive',
        tickerTwoFourHrChange: string = (parseFloat(twoFourHrChange)) < 0 ? 'negative' : 'positive';

    return (
        <tr>
            <td>{ props.count }</td>
            <td className="withIMG"><img alt={ props.name } width = {25} src={`https://www.cryptocompare.com${ data[selectedCurrency]["IMAGEURL"] }`} /> { props.name }</td>
            <td>{ data[selectedCurrency]["PRICE"] }</td>
            <td>{ data[selectedCurrency]["MKTCAP"] }</td>
            <td className = {`ticker ${tickerHrChange}`}>{ hrChange }%</td>
            <td className = {`ticker ${tickerTwoFourHrChange}`}>{ twoFourHrChange }%</td>
        </tr>
    )
}

export default CryptoListItem;