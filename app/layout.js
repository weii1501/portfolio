// import { Inter } from 'next/font/google'
// import { Poppins } from 'next/font/google'
import Layout from '@/components/Layout'
import './globals.css'
import Head from 'next/head'

// const poppins = Poppins({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-poppins',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
// })

export const metadata = {
  title: 'Vo Dac Luc - Portfolio',
  description: 'Vo Dac Luc - Portfolio',
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' key='viewport' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='facebook-domain-verification' content='ui2enhwulffy2md9b2xuy2ojllx8h8' />
        <meta name='description' content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>

      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
