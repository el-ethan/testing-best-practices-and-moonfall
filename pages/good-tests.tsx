import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  const [failing, setFailing] = useState(true)

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
            What makes a good test?
        </h1>
        <ul>
          <li>Only fails when the system under test (SUT) is broken</li>
          <li>Only passes when the SUT is not broken</li>
          <li>Executes as fast as it can (which won't always be fast)</li>
          <li>When it fails, it's clear why</li>
          <li>It's clear what is being tested</li>
          <li>Not dependent on other tests/test order</li>
          <li>Deterministic: same inputs, same code for SUT, same test result</li>
        </ul>
      </main>
      
    </div>
  )
}
