import express from 'express'
import 'dotenv/config'

const app = express()
app.use('/user', (req, res, next) => {
  console.log('user home')
  res.send('<h1>Hello user 1</h1>')
  return res.end()
})
app.use('/', (req, res, next) => {
  console.log('home')
  res.send('<h1>I&pos;m home!</h1>')
  return res.end()
})
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
