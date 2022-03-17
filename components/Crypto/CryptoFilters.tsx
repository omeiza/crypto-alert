import { Component } from "react";
import { countryList } from "../Helpers";

interface filterState {
    countryCurrency: object,
    selectedCurrency: string
}



class CryptoFilters extends Component<any, filterState> {
    constructor(props: any) {
        super(props);

        this.state = {
            countryCurrency: {},
            selectedCurrency: ''
        };
    }

    async getFilterData(): Promise<Object[]> {
        return await countryList();
    }

    componentDidMount() {
        this.getFilterData()
            .then(( currencies) => {
                this.setState({
                    countryCurrency: currencies[0]
                });
            })

            .catch(err => {
                console.log(`Error listing currencies: ${err}`)
            })
    }

    currencyOptions(optionsObj: any) {
        let optionsContent = [];
        for (const coin in optionsObj) {
            optionsContent.push (
                <option key={coin} value={coin}>{`${coin}: ${optionsObj[coin]}`}</option>
            );
        }

        return optionsContent;
    }

    render() {
        return (
            <div className="filterSection">
                <div className="inputStyle searchSection">
                    <input placeholder="Search Crypto e.g BTC" />
                </div>
                <div className="inputStyle currencySelector">
                    <select>
                        { this.currencyOptions(this.state.countryCurrency) }
                    </select>
                </div>
            </div>
        );
    }
}

export default CryptoFilters;