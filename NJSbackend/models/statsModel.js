const mongoose = require('mongoose');

const StatsSchema = new mongoose.Schema({
  stats: {
    term: String,
    date: String,
    time: String
  }
});

const Stats = mongoose.model("stats", StatsSchema);
module.exports = Stats;
