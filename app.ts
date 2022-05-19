import express from 'express'
import path from 'path'
import 'dotenv/config'
import { router as adminRoute } from './routes/admin'
import { router as shopRoute } from './routes/shop'
import { get404 } from './controllers/404'
import rootDir from './utils/path'

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(rootDir, 'public')))

app.use('/admin', adminRoute)

app.use(shopRoute)
// 404 catch all. '/' not needed. it's default.
app.use('/', get404)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
