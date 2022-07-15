import Link from "next/link"
import { useRouter } from "next/router"
import { navigationLinks } from "../../utils/data"
import styles from "./Navbar.module.css"

export const Navbar = () => {
  const { pathname } = useRouter()

  const verifyActiveLink = (loopPath: string) => {
    if (loopPath === "/" && pathname !== "/") {
      return null
    }

    if (pathname.includes(loopPath)) {
      return styles.linkItemActive
    }
    return null
  }

  return (
    <ul className={styles.container}>
      {navigationLinks.map(({ label, path }, index) => (
        <li
          key={index}
          className={[styles.linkItem, verifyActiveLink(path)].join(" ")}
        >
          <Link href={path}>{label}</Link>
        </li>
      ))}
    </ul>
  )
}
