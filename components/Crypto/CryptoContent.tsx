import CryptoList from './CryptoList';

interface props {
    data: {
        [x: string]: any;
    };
}

const CryptoContent = (props: props) => {
    const data = props.data;

    return (
        <tbody className="crypto__list--body">
            <CryptoList data = { data } />
        </tbody>
    );
}

export default CryptoContent;