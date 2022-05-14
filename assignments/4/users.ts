import { Router } from 'express'
export const route = Router()

const users = []
route.get('/users', (req, res, next) => {
  res.render('users', { pageTitle: 'Users', users })
})
route.post('/users', (req, res, next) => {
  // console.log('hi', req.body.userName)

  users.push(req.body.userName)
  res.render('users', { pageTitle: 'Users', users })
})
