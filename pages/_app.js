import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NextNProgress from 'nextjs-progressbar';
import { SessionProvider } from "next-auth/react"
import { GoogleAnalytics } from '@next/third-parties/google'
export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <>


            <SessionProvider session={session}>
                <NextNProgress color="#00FF00" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
                <Component {...pageProps} />
                <GoogleAnalytics gaId="G-1YKLTW9RD3" />
                <ToastContainer
                    position="bottom-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </SessionProvider>

        </>
    )
}
