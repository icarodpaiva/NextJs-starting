import { NextApiHandler } from "next"
import { users } from "../../../utils/users"

const handler: NextApiHandler = (req, res) => {
  const { id } = req.query

  const userQuery = users.filter(user => user.id.toString() === id)

  if (userQuery.length > 0) {
    res.json(userQuery)
    return
  }

  res.json({ error: "Usuário não encontrado" })
}

export default handler
