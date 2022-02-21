const CryptoFilters = () => {
    return (
        <div className="filterSection">
            <div className="inputStyle searchSection">
                <input placeholder="Search Crypto e.g BTC" />
            </div>
            <div className="inputStyle currencySelector">
                <select>
                    <option value="USD">USD</option>
                    <option value="NGN">NGN</option>
                </select>
            </div>
        </div>
    );
}

export default CryptoFilters;