import { NextApiHandler } from "next"

const handler: NextApiHandler = (_, res) => {
  res.json({ pong: true })
}

export default handler
