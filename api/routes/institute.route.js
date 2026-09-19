import express from "express"

const InstituteRouter = express.Router();

InstituteRouter.get("/", (req, res) => {
    return res.status(200).json({message:"You are in Institute section"})
})

export default InstituteRouter;