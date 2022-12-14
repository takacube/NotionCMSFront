import '../styles/globals.css'
import '../styles/header.css'
import '../styles/blogCard.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
