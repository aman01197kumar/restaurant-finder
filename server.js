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

// app.post("/add-user", async (req, res) => {
//   try {
//     const { username, email } = req.body;

//     await my_db.execute("INSERT INTO users (username, email) VALUES (?, ?)", [
//       username,
//       email,
//     ]);

//     const [rows] = await my_db.execute("SELECT * FROM users");

//     return res.status(200).json({ users: rows });
//   } catch (err) {
//     console.log("Error:", err);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// });

app.use(router)

app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000");
});
