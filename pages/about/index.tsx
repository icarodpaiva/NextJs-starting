import Link from "next/link"
import { useState } from "react"

const About = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div>
      <h1>About me v2</h1>

      <h2>Env variable: {process.env.NEXT_PUBLIC_NOME}</h2>

      <ul>
        <li>
          <Link href="/about/icaro">Icaro</Link>
        </li>
        <li>
          <Link href="/about/tallyta">Tallyta</Link>
        </li>
      </ul>

      <button onClick={() => setDarkTheme(!darkTheme)}>Change theme</button>

      <style jsx>
        {`
          div {
            background-color: ${darkTheme ? "black" : "white"};
            color: ${darkTheme ? "white" : "black "};
          }
        `}
      </style>
    </div>
  )
}

export default About
