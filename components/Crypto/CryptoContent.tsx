import CryptoList from './CryptoList';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

const CryptoContent = () => {
    const selectedData: object = useSelector((state: RootState) => {
        return state;
    });

    // console.log(selectedData);
    return (
        <tbody className="crypto__list--body">
            <CryptoList  />
        </tbody>
    );
}

export default CryptoContent;