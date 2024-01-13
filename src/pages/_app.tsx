import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Open_Sans } from 'next/font/google'

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',

})

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={openSans.className}>
      <Component {...pageProps} />
    </div>
  )}
