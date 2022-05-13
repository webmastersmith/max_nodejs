import express from 'express'
import 'dotenv/config'
import { router as adminRoute } from './admin'
import { router as shopRoute } from './shop'

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use('/admin', adminRoute)

app.use(shopRoute)

// 404 catch all. '/' not needed. it's default.
app.use('/', (req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>')
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
