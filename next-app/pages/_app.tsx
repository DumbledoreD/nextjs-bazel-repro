const path = require("path");
console.log(">>> _app.tsx", path.resolve("react"));

import '../styles/globals.sass'

import {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
