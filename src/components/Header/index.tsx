import Image from 'next/image'
import styles from './style.module.scss'

export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="ig.news" width="100%" height="100%" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Post</a>
        </nav>
      </div>
    </header>
  )
}