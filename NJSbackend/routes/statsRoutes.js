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

app.delete('/stats', async (req, res) => {
  console.log("hi")
const stats = await statsModel.find({});
console.log(stats)
  stats.remove({})
  });
     // .then(data => {
     //   res.send({
     //     message: `${data.deletedCount} Tutorials were deleted successfully!`
     //   });
     // })
     // .catch(err => {
     //   res.status(500).send({
     //     message:
     //       err.message || "Some error occurred while removing all tutorials."
     //   });
     // });

  //
  // const stats = new statsModel(req.body);
  // try {
  //   await stats.save();
  //   res.send(stats);
  // } catch (err) {
  //   res.status(500).send(err);
  // }


// postQueryData(){
// const requestOptions = {
//      method: 'DELETE',
//      headers: {'Content-Type': 'application/json'}
//  };
//  fetch('http://localhost:8000/stats', requestOptions)
//      .then(response => response.json())
//      .then(data => console.log("success"));
//    }

module.exports = app
