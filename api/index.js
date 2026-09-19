import express from "express"
import AdminRouter from "./routes/admin.route.js";
import InstituteRouter from "./routes/institute.route.js";
import UserRouter from "./routes/user.route.js";

export const APP = express();


APP.use(express.json());

APP.use(express.urlencoded({ extended: true }));

APP.set("view engine", "ejs");
APP.set("views", "./views");



APP.use("/api/admin", AdminRouter);
APP.use("/api/institute", InstituteRouter);
APP.use("/api/user", UserRouter);


APP.get("/", (req, res) => {
    return res.status(200).render("index", { title: "Welcome to Admission System" })
})




