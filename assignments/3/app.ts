import express from 'express'
import path from 'path'
import 'dotenv/config'
import { route as homeRoute } from './routes/home'
import { route as usersRoute } from './routes/users'

const app = express()
app.use(express.static(path.join(__dirname, 'public')))

app.use(usersRoute)
app.use(homeRoute)

app.listen(process.env.PORT)
