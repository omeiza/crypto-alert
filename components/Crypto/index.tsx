import CryptoContent from './CryptoContent';
import CryptoFilters from "./CryptoFilters";

interface Props {
    currency: string,
    data: { [key: string]: any };
}

const Crypto = (props: Props): JSX.Element => {
    return (
        <div className="crypto__container">
            <CryptoFilters currency = { props.currency } />
            <table className="crypto__list">
                <thead className="crypto__list--header">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th className="price__header">Price</th>
                    <th>MKT CAP</th>
                    <th>Volume (1hr)</th>
                    <th>Volume (24hr)</th>
                    <th>1hr %</th>
                    <th>24hr %</th>
                    <th />
                </tr>
                </thead>
                <CryptoContent currency = { props.currency } data = { props.data } />
            </table>
        </div>
    )
}

export default Crypto