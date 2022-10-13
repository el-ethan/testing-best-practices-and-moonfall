import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  const [failing, setFailing] = useState(true)

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Don't test implementation details 
        </h1>
            
      </main>
      
    </div>
  )
}
