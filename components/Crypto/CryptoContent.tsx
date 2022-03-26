import CryptoList from './CryptoList';

interface Props {
    data: object
}

const CryptoContent = (props: Props): JSX.Element => {
    return (
        <tbody className="crypto__list--body">
            <CryptoList data = { props.data }  />
        </tbody>
    );
}

export default CryptoContent;