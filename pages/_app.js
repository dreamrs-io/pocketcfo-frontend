import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NextNProgress from 'nextjs-progressbar';
import { UserProvider } from '@/contexts/userContext';


export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <>
            <UserProvider>
                <NextNProgress color="#00FF00" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
                <Component {...pageProps} />
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
            </UserProvider>

        </>
    )
}
