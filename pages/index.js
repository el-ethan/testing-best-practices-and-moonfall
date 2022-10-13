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
        <LinkList />
      </main>
    </div>
  );
}
