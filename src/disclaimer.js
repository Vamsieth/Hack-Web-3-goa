import styles from '@/styles/popup.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineRollback } from 'react-icons/ai'

export default function Disclaimer ({handleClose}) {
    const [isChecked, setIsChecked] = useState(false);
    const router = useRouter();

  const handleChecked = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleContinue = () => {
    if (isChecked) {
      router.push('/signup');
    }
  };
    return (
        <div className={styles.main}>
            <div className={styles.model}>
                <AiOutlineRollback className={styles.back} onClick={handleClose} />
                <h1 className={styles.term}>Terms and conditions</h1>
                <div className={styles.para}>
                    
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                     ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                       Duis aute irure dolor in reprehenderit in voluptate velit esse.velit esse 
                       cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                       , sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className={styles.box}>                   
                <input type="checkbox" name="" value=""
                 className={styles.check} checked = {isChecked} onChange={handleChecked} />
                <p className={styles.paraa}>I agree</p>
                </div>
                <div className={styles.button}>
                <button className={styles.buttonn} disabled={!isChecked} onClick={handleContinue}
                 >Continue</button>
                </div>
            </div>
        </div>
    )
} 