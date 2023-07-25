import styles from '@/styles/nav.module.css'
import logo from '@/img/logo.png'
import Image from 'next/image'

export default function SignNav () {
    return (
        <div className={styles.signnav}>
            <Image src={logo} className={logo}    />
        </div>
    )
}