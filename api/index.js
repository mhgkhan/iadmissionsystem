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


const PORT = process.env.PORT || 3000;


try {
    await mongoose.connect("mongodb://localhost:27017/iadmissionsystem");

    APP.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} catch (error) {
    console.log("Error in connecting to database:", error);
}

export default APP;

