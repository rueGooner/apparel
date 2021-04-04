import Head from 'next/head'
import Header from './Header'
import Navigation from './Navigation'

export default function Layout({ children, navigation }) {
  return (
    <div className="mx-auto min-h-screen h-screen flex flex-col">
      <Head>
        <title>Apparel 4 U</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400&amp;display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <Navigation navigation={navigation} />

      <main className="flex flex-col items-center justify-center">
        {children}
      </main>

      <footer className="text-center bg-black h-40 text-white mt-auto">
        A4U
      </footer>
    </div>
  )
}
