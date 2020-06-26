module.exports = function(app, db) {  app.post('/notes', (req, res) => {  res.send('Hello')  });};

//in the walkthrough app.get was app.post and it didnt work until I changed it...


// module.exports = function(app, db) {  app.post('/notes', (req, res) => {    console.log(req.body)    res.send('Hello')  });};
