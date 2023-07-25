import styles from '../styles/globals.module.css'
import '@/styles/globals.css'
import { useRouter } from 'next/router';
import '@/Nav'
import Nav from '@/Nav'
import Image from 'next/image'
import bitcoin from '@/img/bitcoin.png'
import litcoin from '@/img/litcoin.png'
import ethereum from '@/img/ethereum.png'
import ethereum2 from '@/img/ethereum2.png'
import sphered from '@/img/sphered.png'
import star from '@/img/star-img.png'
import starmini from '@/img/starmini.png'
import starbig from '@/img/starbig.png'


export default function App({ Component, pageProps }) {
  const router = useRouter(); 
  const isHomePage = router.pathname === '/';


  return (
    <div>
    <div className={styles.body}>  
      <div className={styles.ring}> 
      </div>
      <div className={styles.ringg}> 
      </div>
      <div className={styles.ringgg}> 
      </div>
      {isHomePage && (
          <>
            <Image src={bitcoin} className={styles.bitcoin} />
            <Image src={litcoin} className={styles.litcoin} />
            <Image src={ethereum} className={styles.ethereum} />
            <Image src={ethereum2} className={styles.ethereumtwo} />
            <Image src={sphered} className={styles.sphered} />
            <Image src={star} className={styles.star} />
            <Image src={starmini} className={styles.starmini} />
            <Image src={starbig} className={styles.starbig} />
            <Image src={starbig} className={styles.starbigg} />
            <Nav/>
            <div className={styles.spherepur}></div>
          </>
        )}
       
      <div className={styles.blur}></div>
      <div className={styles.blurr}></div>
      <div className={styles.blurrr}></div>
    </div>
      
     <Component {...pageProps} />
    </div>
  )
}
