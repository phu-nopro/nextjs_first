import { Mainlayout } from '../components/ui/layout';
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <Link href='/blog'>Blog</Link>
      </main>

    </div>
  )
}
Home.Layout = Mainlayout
