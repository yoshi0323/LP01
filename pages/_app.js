import { Abel } from 'next/font/google'

// Abelフォントの設定
const abel = Abel({
  weight: '400',
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={abel.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp 