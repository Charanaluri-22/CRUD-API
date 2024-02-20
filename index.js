const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const Product = require("./models/Product");
const Router = require('./routes/product.route')
require('dotenv').config()
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//connect to database and start server
const password = process.env.MONGO_PASSWORD
app.listen(3000, async () => {
  await mongoose
    .connect(
      `mongodb+srv://208w1a1268:${password}@cluster0.fubp6cs.mongodb.net/CRUD_API?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("connected to the database");
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
  console.log("Server is running...");
});
app.use('/api/products',Router)
//default route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to CRUD API" });
});
app.use((req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});