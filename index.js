// index.js
const express = require("express");
const path = require("path");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url"); // ✅ Corrected

// MongoDB connect
connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("MongoDB connected"));

const app = express();
const PORT = 8001;

// Middlewares & routes
app.use(express.json());
app.use("/url", urlRoute);

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views")); // ✅ Corrected

// Start server
app.listen(PORT, () =>
  console.log(`Server Started at PORT: ${PORT}`)
);
