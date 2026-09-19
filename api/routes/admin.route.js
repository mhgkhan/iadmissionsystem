import express from "express"

const AdminRouter = express.Router();

AdminRouter.get("/", (req, res) => {
    return res.status(200).json({message:"You are in Admin section"})
})

export default AdminRouter;