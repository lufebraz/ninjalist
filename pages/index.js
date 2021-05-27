import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
      <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perspiciatis blanditiis, nulla vel officia veniam dolore iste quo tempore alias fugit reprehenderit minus animi ab, nihil in quaerat voluptatum eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sit eveniet? Explicabo qui minima id? Maiores voluptas, quod optio distinctio eveniet autem. Quam nam consequuntur pariatur et magni minima voluptates?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sit eveniet? Explicabo qui minima id? Maiores voluptas, quod optio distinctio eveniet autem. Quam nam consequuntur pariatur et magni minima voluptates?</p>
        <Link href="/ninjas" >
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
