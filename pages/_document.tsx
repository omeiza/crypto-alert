import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		return await Document.getInitialProps(ctx)
	}

	render() {
		return (
			<Html>
				<Head>
					<link href="/fonts/style.css" rel='stylesheet' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument