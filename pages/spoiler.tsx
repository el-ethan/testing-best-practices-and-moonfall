
import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Spoiler } from '../components/Spoiler';

export default function Home() {

    const [failing, setFailing] = useState(true)

  return (
    <div className={styles.container}>

        <main className={styles.main}>
            <Image src={"https://i.imgur.com/WUk3xLc.jpeg"} height='500' width='500' />
            <Spoiler />
        </main>
      
    </div>
  )
}
