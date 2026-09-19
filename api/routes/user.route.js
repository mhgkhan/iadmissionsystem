import express from "express"

const UserRouter = express.Router();

UserRouter.get("/", (req, res) => {
    return res.status(200).json({ message: "You are in user section" })
})

export default UserRouter;