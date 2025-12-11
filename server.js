import express from "express";
import { my_db } from "./db_config.js";
import dotenv from "dotenv";
import { router } from "./route/restaurant.route.js";

const app = express();
dotenv.config;

const PORT = process.env.PORT||3001
app.use(express.json());

try {
  my_db;
  console.log("MySQL connected successfully!");
} catch (err) {
  console.log("err", err);
}


app.use(router)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
