import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  const [failing, setFailing] = useState(true)

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Some tips to write <Link href="/good-tests"><a>"good"</a></Link> tests
        </h1>
        <ul>
          <li>Make your tests fail</li>
          <li>Don't test your implementation details (test "what" not "how")</li>
          <li>One use one assertion per test (or as few assertions as 
            possible)</li>
          <li>Name your tests well</li>
          <li>Take care when asserting absence</li>
          <li>Avoid overly general selectors</li>
          <li>Avoid overly specific selectors</li>
          <li>Avoid asserting "truthiness"</li>

        </ul>
      </main>
      
    </div>
  )
}
