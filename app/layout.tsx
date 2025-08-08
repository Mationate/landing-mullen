import './css/style.css'

import { Roboto, Architects_Daughter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import Header from '@/components/ui/header'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'MullenPeluqueros - Aprende, Aplica y Triunfa',
  description: 'Plataforma de aprendizaje y experiencia. Queremos que descubras, aprendas, apliques y triunfes en el mundo de la Barbería - Te ayudamos más allá del corte!!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${roboto.variable} ${architects_daughter.variable} font-roboto antialiased bg-gray-900 text-gray-200 tracking-tight`}>
      <ToastContainer
        transition={Bounce}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
        <Analytics/>
      </body>
    </html>
  )
}
 