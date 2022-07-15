import Head from "next/head"
import { ReactElement } from "react"
import { Navbar } from "../Navbar"
import styles from "./Layout.module.css"

interface LayoutProps {
  children: ReactElement
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>My app :D</title>
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Header</h1>
        </header>
        <Navbar />

        <main>{children}</main>

        <footer className={styles.footer}>
          <h1>Footer</h1>
        </footer>
      </div>
    </>
  )
}
