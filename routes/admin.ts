import express from 'express'
import {
  getAddProduct,
  postAddProduct,
  editAdminProducts,
} from '../controllers/admin'

export const router = express.Router()

router.get('/add-product', getAddProduct)
router.post('/add-product', postAddProduct)

router.get('/products', editAdminProducts)

router.get('/product-list')
