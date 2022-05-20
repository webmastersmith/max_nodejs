import express from 'express'
import {
  getAddProduct,
  postAddProduct,
  products,
  editProducts,
} from '../controllers/products'

export const router = express.Router()

router.get('/add-product', getAddProduct)
router.post('/add-product', postAddProduct)

router.get('/products', products)

router.get('/products', editProducts)
