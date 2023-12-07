import Image from 'next/image'
import Link from 'next/link';
import styles from '@/app/ui/main.module.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">

      <div className={styles['hero']}>
        <div className={styles['hero-text-wrapper']}>
          <h1 className="ivypresto-display">To bringing people <em>together.</em></h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <Link href="/" className={styles['portfolio-button']}>Portfolio</Link>
        </div>
        <div className={styles['hero-image-wrapper']}>
          <Image alt="image group" className={styles['hero-image-1']} src="/img-group.png" width={724} height={577} />
        </div>
      </div>
      <section className="p-10">
        <h2 className="ivypresto-display text-6xl my-8 mx-4">Knowing the numbers is never <em>enough</em>.</h2>
      </section>
    </main>
  )
}
