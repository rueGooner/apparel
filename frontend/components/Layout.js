import Head from 'next/head'
import Header from './Header'
import Navigation from './Navigation'

export default function Layout({ children }) {
  return (
    <div className="mx-auto px-10 min-h-screen h-screen">
      <Head>
        <title>Apparel 4 U</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navigation />

      <main className="min-h-full flex flex-col items-center justify-center">
        <h1 className="">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        {children}
      </main>

      <footer className="">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="" />
        </a>
      </footer>
    </div>
  )
}
