import Link from "next/link"

const About = () => {
  return (
    <div>
      <h1>About me v2</h1>

      <ul>
        <li>
          <Link href="/about/icaro">Icaro</Link>
        </li>
        <li>
          <Link href="/about/tallyta">Tallyta</Link>
        </li>
      </ul>
    </div>
  )
}

export default About
