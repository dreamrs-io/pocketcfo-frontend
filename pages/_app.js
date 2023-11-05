import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
    return (
        <>
            <NextNProgress color="#00FF00" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
            <Component {...pageProps} />
        </>
    )
}
