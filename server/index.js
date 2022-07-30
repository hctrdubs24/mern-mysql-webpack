import express from "express";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/task.routes.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//* Middleware
app.use(express.json());
app.use(
  cors()
  // cors({
  //   origin: "http://localhost:5173",
  // })
);

//* Settings.
app.use(indexRoutes);
app.use(taskRoutes);
app.use(express.static(join(__dirname, "../client/dist")));

app.listen(process.env.PORT || 5000, console.log(`Server is listenning on port ${process.env.PORT || 5000}`));
