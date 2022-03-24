import CryptoList from './CryptoList';

const CryptoContent = (): JSX.Element => {
    return (
        <tbody className="crypto__list--body">
            <CryptoList  />
        </tbody>
    );
}

export default CryptoContent;