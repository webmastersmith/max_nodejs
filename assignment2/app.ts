import express from 'express'
import 'dotenv/config'

const app = express()
app.use('/user', (req, res, next) => {
  console.log('user home')
  res.send('Hello user 1')
  return res.end()
})
app.use('/', (req, res, next) => {
  console.log('home')
  return res.end()
})
app.listen(process.env.PORT)
