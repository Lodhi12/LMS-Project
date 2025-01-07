import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import router from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import courseRoute from "./routes/course.route.js";

dotenv.config({});

//Call database connection here
connectDB();

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const PORT = process.env.PORT;

// apis

app.use("/api/v1/user", router);
app.use("/api/v1/course", courseRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
