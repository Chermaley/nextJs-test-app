import NextNprogress from 'nextjs-progressbar';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height="3"
            />
            <div className='wrapper'>
                <Component {...pageProps}/>
            </div>
        </>
    )
}