module.exports = function (app, db) {
  app.post('/api/addquestion', (req, res) => {
    const question = { title: req.body.body, answer: req.body.title}
    db.collection('questions').insert(question, (err, result) => {
      if (err) {
        res.send({'error' : 'An error accured'})
      } else {
        res.send(result.ops[0])
      }
    })
      console.log(req.body)
      res.send('Hello');
  })

  
  
};