import { Router } from 'express'

export const route = Router()

route.get('/', (req, res, next) => {
  res.render('home', { pageTitle: 'Home' })
})
