import { Nunito } from 'next/font/google'
import styles from './page.module.css'
import { AppContainer } from './components/AppContainer'

const nunito = Nunito({ subsets: ['cyrillic'] })

export default function Home() {
  return (
    <div className={nunito.className}>
      <main className={styles.main}>
        <AppContainer />
      </main>
    </div>
  )
}
