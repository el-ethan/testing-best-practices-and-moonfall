import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Spoiler } from '../components/Spoiler';
import { LinkList } from '../components/LinkList';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image src={'https://i.imgur.com/WUk3xLc.jpeg'} height="500" width="500" />
        <Spoiler />
      </main>
    </div>
  );
}
