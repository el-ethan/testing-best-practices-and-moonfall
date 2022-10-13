import React from 'react'
import { useState } from 'react'
import styles from './Spoiler.module.css'

import { titleCase } from 'title-case'

export const Spoiler = () => {

  const [showSpoiler, setShowSpoiler] = useState(false)
  return (
    <div>
      {showSpoiler && <h1 data-testid="spoiler-text">
        {titleCase('the moon is a megastructure.')}
      </h1>}
      <button className={styles.button} id="spoil-button" onClick={() => setShowSpoiler(true)}>Spoil</button>
    </div>
  )
}