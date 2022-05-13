import { Router } from 'express'
import path from 'path'

export const router = Router()

router.get('/', (req, res, next) => {
  console.log('home')
  res.sendFile(path.join(__dirname, '..', 'view', 'shop.html'), (err) => {
    console.log(err)
  })
})
