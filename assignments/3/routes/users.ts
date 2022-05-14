import { Router } from 'express'
import path from 'path'

export const route = Router()

route.get('/users', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'view', 'users.html'))
})
