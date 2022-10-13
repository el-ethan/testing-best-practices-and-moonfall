import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Spoiler } from '../components/Spoiler';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image src={'https://i.imgur.com/WUk3xLc.jpeg'} alt="Moonfall movie poster" height="400" width="600" />
        <Spoiler />
      </main>
    </div>
  );
}
