import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title> Home</title>
        <meta name="keywords" content="home" />
      </Head>
      <div className={styles.homediv}>
        <h1 className={styles.title}>Natural Hazards DataViz</h1>
        <p className={styles.text}>The National Centers for Environmental Information (NCEI) archives and assimilates tsunami, earthquake, and volcano data to support research, planning, response, and mitigation. Long-term data gathered by them is used in this webpage with the purpose of visualization.</p>
        <p className={styles.text}>Click any of the following links to show data associated to that respective hazard</p>

        <div className={styles.btndiv}>
          <Link href="/earthquakes/">
            <a className={styles.btn}>Earthquakes</a>
          </Link>

          <Link href="/tsunamis/">
            <a className={styles.btn}>Tsunamis</a>
          </Link>

        </div>
      </div>
    </>


  )
}
