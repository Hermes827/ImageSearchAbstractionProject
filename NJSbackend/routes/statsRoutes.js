const express = require('express');
const statsModel = require('../models/statsModel.js');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/stats', async (req, res) => {
  const stats = await statsModel.find({});
  try {
    res.send(stats);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/stats', async (req, res) => {
  const stats = new statsModel(req.body);
  try {
    await stats.save();
    res.send(stats);
  } catch (err) {
    res.status(500).send(err);
  }
});

  app.delete('/stats/:id', async (req, res) => {
  try {
    const stat = await statsModel.findByIdAndDelete(req.params.id)

    if (!stat) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = app
