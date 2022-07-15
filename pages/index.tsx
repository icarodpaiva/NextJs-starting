import type { NextPage } from "next"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import mushokuImg from "../public/mushoku.jpg"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <h2>Static optimized img</h2>
      <Image src={mushokuImg} alt="mushoku tensei banner" />

      <h2>Dinamic optimized img</h2>
      <Image
        src="https://i0.wp.com/www.otakupt.com/wp-content/uploads/2021/03/Mushoku-Tensei-2-cour.jpg?fit=1920%2C1080&ssl=1"
        alt="mushoku tensei banner"
        width={640}
        height={347}
        layout="responsive"
      />
    </div>
  )
}

export default Home
