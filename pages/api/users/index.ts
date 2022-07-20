import { NextApiHandler } from "next"
import { users } from "../../../utils/users"

// get users
const handlerGET: NextApiHandler = (req, res) => {
  const { limit } = req.query
  const limitNumber = Number(limit)

  if (limit && !isNaN(limitNumber)) {
    const usersLimiteds = users.filter((_, index) => index + 1 <= limitNumber)

    res.json(usersLimiteds)
    return
  }

  res.json(users)
}

// insert new user
const handlerPOST: NextApiHandler = (req, res) => {
  const { name, age } = req.body
  res.json({ id: 4, name, age })
}

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "GET":
      handlerGET(req, res)
      break
    case "POST":
      handlerPOST(req, res)
      break
    default:
      res.json({ type: "another method" })
  }
}

export default handler
