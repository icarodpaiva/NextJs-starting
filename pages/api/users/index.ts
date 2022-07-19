import { NextApiHandler } from "next"
import { users } from "../../../utils/users"

const handler: NextApiHandler = (_, res) => {
  res.json(users)
}

export default handler
