import Image from 'next/image';
import { SignInButton } from '../SignInButton';
import styles from './style.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="ig.news" width="100%" height="100%" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a className={styles.active}>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
            <a>Post</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}