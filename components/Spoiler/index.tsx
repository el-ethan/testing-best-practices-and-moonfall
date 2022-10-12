import React from 'react'
import { useState } from "react"
import styles from './Spoiler.module.css'

export const Spoiler = () => {
    const [showSpoiler, setShowSpoiler] = useState(false)
    return (
        <div>
            {showSpoiler && <h1 data-testid="spoiler-text">
                The moon is a megastructure.
            </h1>}
            <button className={styles.button} onClick={() => setShowSpoiler(true)}>Spoil</button>
        </div>
    )
}