import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head >
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="72x72" href="/assets/icons/icon-72x72.png" />
                <link rel="icon" type="image/png" sizes="72x72" href="/assets/icons/icon-72x72.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <body>

                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
