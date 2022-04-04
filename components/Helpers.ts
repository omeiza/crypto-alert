const countryList = (): Promise<object[]> => {
	return new Promise((resolve, reject) => {
		resolve(JSON.parse('[{"AED":"United Arab Emirates Dirham","ALL":"Albanian Lek","AMD":"Armenian Dram","AOA":"Angolan Kwanza","ARS":"Argentine Peso","AUD":"Australian Dollar","AWG":"Aruban Florin","BAM":"Bosnia-Herzegovina Convertible Mark","BDT":"Bangladeshi Taka","BGN":"Bulgarian Lev","BHD":"Bahraini Dinar","BND":"Brunei Dollar","BOB":"Bolivian Boliviano","BRL":"Brazilian Real","BSD":"Bahamian Dollar","BTC":"Bitcoin","BTN":"Bhutanese Ngultrum","BWP":"Botswanan Pula","BYN":"Belarusian Ruble","CAD":"Canadian Dollar","CDF":"Congolese Franc","CHF":"Swiss Franc","CLP":"Chilean Peso","CNH":"Chinese Yuan (Offshore)","CNY":"Chinese Yuan","COP":"Colombian Peso","CRC":"Costa Rican Colón","CZK":"Czech Republic Koruna","DKK":"Danish Krone","DOP":"Dominican Peso","DZD":"Algerian Dinar","EGP":"Egyptian Pound","ERN":"Eritrean Nakfa","ETB":"Ethiopian Birr","EUR":"Euro","GBP":"British Pound Sterling","GEL":"Georgian Lari","GGP":"Guernsey Pound","GHS":"Ghanaian Cedi","GIP":"Gibraltar Pound","GTQ":"Guatemalan Quetzal","HKD":"Hong Kong Dollar","HNL":"Honduran Lempira","HRK":"Croatian Kuna","HUF":"Hungarian Forint","IDR":"Indonesian Rupiah","ILS":"Israeli New Sheqel","INR":"Indian Rupee","IQD":"Iraqi Dinar","IRR":"Iranian Rial","ISK":"Icelandic Króna","JMD":"Jamaican Dollar","JOD":"Jordanian Dinar","JPY":"Japanese Yen","KES":"Kenyan Shilling","KGS":"Kyrgystani Som","KHR":"Cambodian Riel","KRW":"South Korean Won","KWD":"Kuwaiti Dinar","KZT":"Kazakhstani Tenge","LBP":"Lebanese Pound","LKR":"Sri Lankan Rupee","LSL":"Lesotho Loti","MAD":"Moroccan Dirham","MDL":"Moldovan Leu","MMK":"Myanma Kyat","MOP":"Macanese Pataca","MUR":"Mauritian Rupee","MVR":"Maldivian Rufiyaa","MWK":"Malawian Kwacha","MXN":"Mexican Peso","MYR":"Malaysian Ringgit","NAD":"Namibian Dollar","NGN":"Nigerian Naira","NOK":"Norwegian Krone","NPR":"Nepalese Rupee","NZD":"New Zealand Dollar","OMR":"Omani Rial","PAB":"Panamanian Balboa","PEN":"Peruvian Nuevo Sol","PGK":"Papua New Guinean Kina","PHP":"Philippine Peso","PKR":"Pakistani Rupee","PLN":"Polish Zloty","PYG":"Paraguayan Guarani","QAR":"Qatari Rial","RON":"Romanian Leu","RSD":"Serbian Dinar","RUB":"Russian Ruble","RWF":"Rwandan Franc","SAR":"Saudi Riyal","SBD":"Solomon Islands Dollar","SEK":"Swedish Krona","SGD":"Singapore Dollar","SSP":"South Sudanese Pound","STN":"São Tomé and Príncipe Dobra","SYP":"Syrian Pound","SZL":"Swazi Lilangeni","THB":"Thai Baht","TMT":"Turkmenistani Manat","TND":"Tunisian Dinar","TOP":"Tongan Pa\'anga","TRY":"Turkish Lira","TTD":"Trinidad and Tobago Dollar","TWD":"New Taiwan Dollar","TZS":"Tanzanian Shilling","UAH":"Ukrainian Hryvnia","UGX":"Ugandan Shilling","USD":"United States Dollar","UYU":"Uruguayan Peso","UZS":"Uzbekistan Som","VEF":"Venezuelan Bolívar Fuerte (Old)","VES":"Venezuelan Bolívar Soberano","VND":"Vietnamese Dong","VUV":"Vanuatu Vatu","XAF":"CFA Franc BEAC","XOF":"CFA Franc BCEAO","XPD":"Palladium Ounce","XPT":"Platinum Ounce","ZAR":"South African Rand","ZMW":"Zambian Kwacha"}]'))
	});
}

const initialCoinList = (): object[] => {
	return JSON.parse('[{"BTC": "Bitcoin","ETH": "Ethereum","USDT": "Tether","BNB": "BNB","USDC": "USD Coin","XRP": "XRP","LUNA": "Terra","ADA": "Cardano","SOL": "Solana","AVAX": "Avalanche","DOT": "Polkadot","BUSD": "Binance USD","DOGE": "Dogecoin","UST": "TerraUSD","SHIB": "Shiba Inu","MATIC": "Polygon","WBTC": "Wrapped Bitcoin","CRO": "Cronos","DAI": "Dai","ATOM": "Cosmos","LTC": "Litcoin","NEAR": "NEAR Protocol","LINK": "Chainlink","UNI": "Uniswap","TRX": "TRON","BCH": "Bitcoin Cash","FTT": "FTX Token","LEO": "UNUS SED LEO","ALGO": "Algorand","XLM": "Stellar","MANA": "Decentraland","ETC": "Ethereum Classic","BTCB": "Bitcoin BEP2","HBAR": "Hedera","ICP": "Internet Computer","SAND": "The Sandbox","APE": "ApeCoin","XMR": "Monero","WAVES": "Waves","EGLD": "Elrond","FTM": "Fantom","VET": "VeChain","FIL": "Filecoin","AXS": "Axie Infinity","KLAY": "Klaytn","THETA": "Theta Network","XTZ": "Tezos","RUNE": "THORChain","HNT": "Helium","ZEC": "Zcash"}]');
}

const getCryptoData = (selectedCurrency: string | string[]): Promise<Response> => {
	const cryptoTypes: object[] = initialCoinList(),
		cryptoTypesObject: any = cryptoTypes[0],
		cryptoList: string[] = [];

	for (const coin in cryptoTypesObject) {
		cryptoList.push(coin);
	}

	const allCryptoList: string = cryptoList.join(",");
	return fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${allCryptoList}&tsyms=${selectedCurrency}`)
}

// const objectToArray = (thisObject: any): string[] => {
// 	return thisObject.entries();
// }

export { countryList, initialCoinList, getCryptoData }