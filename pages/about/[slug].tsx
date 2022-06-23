import { useRouter } from "next/router"

const DinamicPageAbout = () => {
  const router = useRouter()
  const { slug } = router.query

  return <h3>{slug} is a nice person</h3>
}

export default DinamicPageAbout
