import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts(){
  return(
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lean & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique odit ab nobis facilis il.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lean & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique odit ab nobis facilis il.</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lean & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique odit ab nobis facilis il.</p>
          </a>
        </div>
      </main>
    </>
  )
}