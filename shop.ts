import { Router } from 'express'

export const router = Router()

router.get('/', (req, res, next) => {
  console.log('home')
  res.send('<h1>Home</h1>')
  res.end()
  return
})
