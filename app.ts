import express from 'express'
import 'dotenv/config'
const app = express()
app.use('/nothing', (req, res, next) => {
  console.log('im a teapot!')
  next() //process will die here if next() not called. -Generator.
})
app.use((req, res, next) => {
  console.log('me too!')
})

app.listen(process.env.PORT)
