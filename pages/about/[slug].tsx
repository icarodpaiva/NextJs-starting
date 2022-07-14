import { useRouter } from "next/router"
import { useEffect } from "react"

const DinamicPageAbout = () => {
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    const handleRouteChange = (url: string) => console.log(`going to ${url}`)

    router.events.on("routeChangeComplete", handleRouteChange)

    return () => router.events.off("routeChangeComplete", handleRouteChange)
  }, [])

  return (
    <div>
      <h1>{slug} is a nice person</h1>

      <h2>useRouter aplly</h2>
      <ul>
        <li>Pathname: {router.pathname}</li>
        <li>Is fallback: {router.isFallback.toString()}</li>
        <li>
          <button onClick={() => router.push("/about/pedro")}>
            go to <b>pedro</b> page (with history)
          </button>
        </li>
        <li>
          <button onClick={() => router.replace("/about/pedro")}>
            go to <b>pedro</b> page (without history)
          </button>
        </li>
      </ul>
    </div>
  )
}

export default DinamicPageAbout
