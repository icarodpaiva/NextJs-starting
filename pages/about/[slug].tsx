import { useRouter } from "next/router"

const DinamicPageAbout = () => {
  const router = useRouter()
  const { slug } = router.query

  return <h3>P{slug} is a nice person</h3>
}

export default DinamicPageAbout
