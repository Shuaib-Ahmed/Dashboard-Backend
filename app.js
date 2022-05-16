const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// articles modal
const articles = require("./modals/articles");

// get articles
app.get("/api/v1/articles", async (req, res) => {
  try {
    const data = await articles.find().limit(1000);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({});
  }
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("database connection made");

    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
