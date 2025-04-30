import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";


const app = express();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoutes);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.listen(8800, () => {
  console.log("Server is running!");
});

