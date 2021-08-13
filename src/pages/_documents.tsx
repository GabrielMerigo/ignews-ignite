import Doucument, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Doucument {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
          <title>ig.news</title>
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}