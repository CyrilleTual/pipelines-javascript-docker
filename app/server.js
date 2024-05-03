const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World, have a nice day 7eme try  Enfin!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
