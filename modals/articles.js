const mongoose = require("mongoose");

const articleScheme = new mongoose.Schema({
  relevance: Number,
  intensity: Number,
  likelihood: Number,
  title: String,
  source: String,
  pestle: String,
  country: String,
  published: String,
  added: String,
  impact: String,
  start_year: String,
  region: String,
  url: String,
  insight: String,
  topic: String,
  sector: String,
  end_year: String,
});

module.exports = mongoose.model("articles", articleScheme);