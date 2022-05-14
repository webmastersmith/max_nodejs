import express from 'express'
import path from 'path'
import { route as homeRoute } from './home'
import { route as userRoute } from './users'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(userRoute)
app.use(homeRoute)

app.listen(3000)
