import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

    const [failing, setFailing] = useState(true)

  return (
    <div className={styles.container}>

        <main className={styles.main}>
            <h1 className={styles.title}>
                Make your tests <span className={[failing ? styles.failText : styles.passText, styles.clickableText].join(' ')} onClick={() => setFailing(!failing)}>{failing ? "fail" : "pass"}</span>
            </h1>
            
        </main>
      
    </div>
  )
}
