import { Router } from 'express'
import path from 'path'
import rootDir from '../utils/path'
import { adminData } from './admin'

export const router = Router()

router.get('/', (req, res, next) => {
  console.log('shop')
  res.render('shop')
})
