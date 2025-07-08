import { Prompt } from 'next/font/google'
import { Aside } from '@/components/Aside';
import './globals.css'

export const metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs!",
};

const prompt = Prompt({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600']
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className='app-container'>
        <Aside/>
        {children}
        </div>
      </body>
    </html>
  );
}
