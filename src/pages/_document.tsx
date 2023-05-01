import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'} />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300&display=swap" rel="stylesheet" />
      <title>AlgoCal</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
