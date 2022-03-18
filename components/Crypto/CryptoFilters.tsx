import { useState, useEffect } from "react";
import { countryList } from "../Helpers";
import { actions } from "../../store/reducer";
import { RootState } from "../../store";
import {useDispatch, useSelector} from "react-redux";

const CryptoFilters = (): JSX.Element => {
    const [currencies, setCurrencies] = useState({});

    const selectedCurrency: string = useSelector((state: RootState) => {
            return state.currency;
        }),
        dispatch = useDispatch(),
        setCurrency = (currencyABBR: string) => {
            // console.log(currencyABBR);
            dispatch(actions.setCurrency(currencyABBR))
        };

    const getFilterData = async (): Promise<Object[]> => {
        return await countryList();
    }

    useEffect(() => {
        getFilterData()
            .then(( currencies) => {
                setCurrencies(currencies[0])
            })

            .catch(err => {
                console.log(`Error listing currencies: ${err}`)
            })
    }, [])

    const currencyOptions = (optionsObj: any) => {
        let optionsContent = [];
        for (const coin in optionsObj) {
            optionsContent.push (
                <option key={coin} value={coin}>{`${coin}: ${optionsObj[coin]}`}</option>
            );
        }

        return optionsContent;
    }

    return (
        <div className="filterSection">
            <div className="inputStyle searchSection">
                <input placeholder="Search Crypto e.g BTC" />
            </div>
            <div className="inputStyle currencySelector">
                <select onChange={ (e) => setCurrency(e.target.value) }>
                    { currencyOptions(currencies) }
                </select>
            </div>
        </div>
    );
}

// class CryptoFilters extends Component<any, filterState> {
//     constructor(props: any) {
//         super(props);
//
//         this.state = {
//             countryCurrency: {},
//             selectedCurrency: ''
//         };
//     }
//
//     async getFilterData(): Promise<Object[]> {
//         return await countryList();
//     }
//
//     componentDidMount() {
//         this.getFilterData()
//             .then(( currencies) => {
//                 this.setState({
//                     countryCurrency: currencies[0]
//                 });
//             })
//
//             .catch(err => {
//                 console.log(`Error listing currencies: ${err}`)
//             })
//     }
//
//     currencyOptions(optionsObj: any) {
//         let optionsContent = [];
//         for (const coin in optionsObj) {
//             optionsContent.push (
//                 <option key={coin} value={coin}>{`${coin}: ${optionsObj[coin]}`}</option>
//             );
//         }
//
//         return optionsContent;
//     }
//
//     render() {
//         return (
//             <div className="filterSection">
//                 <div className="inputStyle searchSection">
//                     <input placeholder="Search Crypto e.g BTC" />
//                 </div>
//                 <div className="inputStyle currencySelector">
//                     <select>
//                         { this.currencyOptions(this.state.countryCurrency) }
//                     </select>
//                 </div>
//             </div>
//         );
//     }
// }

export default CryptoFilters;