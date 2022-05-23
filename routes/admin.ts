import express from 'express'
import {
  getAddProduct,
  postAddProduct,
  adminProducts,
  getEditProduct,
  postEditProduct,
  postDeleteProduct,
} from '../controllers/admin'

export const router = express.Router()

router.get('/add-product', getAddProduct)
router.post('/add-product', postAddProduct)

router.get('/products', adminProducts)

router.get('/edit-product/:uuid', getEditProduct)
router.post('/edit-product/:uuid', postEditProduct)

router.get('/delete-product/:uuid', postDeleteProduct)
