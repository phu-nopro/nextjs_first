import { Mainlayout } from '../components/ui/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container'>

      <main className='main'>
        <div className='text-3xl'> hellllo</div>
        <Link href='/blog'> <button> Blog page</button> </Link>
      </main>

    </div>
  )
}
Home.Layout = Mainlayout
