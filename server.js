import { APP } from "./api/index.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3000;


try {
    await mongoose.connect("mongodb://localhost:27017/iadmissionsystem");

    APP.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} catch (error) {
    console.log("Error in connecting to database:", error);
}