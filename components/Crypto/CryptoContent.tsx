import CryptoList from './CryptoList';

interface Props {
    currency: string,
    data: { [key: string]: any };
}

const CryptoContent = (props: Props): JSX.Element => {
    return (
        <tbody className="crypto__list--body">
            <CryptoList currency = { props.currency }  data = { props.data }  />
        </tbody>
    );
}

export default CryptoContent;