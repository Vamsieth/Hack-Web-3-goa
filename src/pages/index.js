import styles from '../styles/style.module.css'
import { useState } from 'react'
import Link from 'next/link'



export default function Index () {

  return (
    <div>
          <div className={styles.index}>
            <div className={styles.sen}> 
            <h1 className={styles.main}>
              We make crypto 
            </h1>
            <h1 className={styles.main} >
              clear and simple
            </h1>
            <p className={styles.para}>Buy,sell, and grow your crypto with CoinFlip, the platform dedicated  </p>
            <p className={styles.paraa}>to every trader at every level</p>
            <button className={styles.connect} >Connect Wallet</button>
            </div>
          </div>
       
    </div>
  )
}
