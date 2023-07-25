import styles from '@/styles/signup.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [publicAddress, setPublicAddress] = useState('');

  
  const isFormComplete =
    name && email && phone && address && currentAddress && publicAddress;
    const router = useRouter();
    const handleContinue = () => {
      if (isFormComplete) {
        router.push('/dashboard');
      }
    };

  return (
    <div className={styles.signup}>
      <div className={styles.model}>
        <h1 className={styles.h}>Sign up</h1>
        <div className={styles.row}>
          <div className={styles.input}>
            <p className={styles.para}>Name</p>
            <input
              className={styles.inp}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <p className={styles.para}>Email</p>
            <input
              className={styles.inp}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.input}>
            <p className={styles.para}>Phone.no</p>
            <input
              className={styles.inp}
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <p className={styles.para}>Address</p>
            <input
              className={styles.inp}
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.input}>
            <p className={styles.para}>Current House Address</p>
            <input
              className={styles.inp}
              type="text"
              value={currentAddress}
              onChange={(e) => setCurrentAddress(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <p className={styles.para}>Public Address</p>
            <input
              className={styles.inp}
              type="text"
              value={publicAddress}
              onChange={(e) => setPublicAddress(e.target.value)}
            />
          </div>
        </div>
        <button type="button"  onClick={handleContinue} className={styles.buttonn} disabled={!isFormComplete}>
          Continue
        </button>
      </div>
    </div>
  );
}
