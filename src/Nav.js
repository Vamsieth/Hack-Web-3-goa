import styles from '@/styles/nav.module.css'
import logo from '@/img/logo.png'
import Image from 'next/image'
import { useState } from 'react'
import Disclaimer from './disclaimer'

export default function  Nav () {
  const [ show , setShow ] = useState(false);

  const handleShow = () => {
    if(!show) {
      setShow(true)
    }
  }

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      
    <div className={styles.nav}>
        <div className={styles.logoContainer}>
            <Image src = {logo}  className= {styles.logo}  /> 
        </div>
        <div className={styles.btncon}>
            <button className={styles.sign} type="">Sign in</button>
            <button className={styles.signup} onClick={handleShow}>Sign up</button>
        </div>
         
    </div>
    {
          show && 
          <Disclaimer handleClose = {handleClose} />
        }
   </div>
  )
}

