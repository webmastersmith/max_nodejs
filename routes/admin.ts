import express from 'express'
import {
  getAddProduct,
  postAddProduct,
  adminProducts,
} from '../controllers/admin'

export const router = express.Router()

router.get('/add-product', getAddProduct)
router.post('/add-product', postAddProduct)

router.get('/products', adminProducts)

router.get('/edit-product')
