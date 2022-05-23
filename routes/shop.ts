import { Router } from 'express'
import {
  getShopIndex,
  getCart,
  getProductList,
  getCheckout,
  getOrders,
  getProductListDetail,
  addToCart,
} from '../controllers/shop'

export const router = Router()

router.get('/', getShopIndex)

router.get('/products', getProductList)

router.get('/products/:uuid', getProductListDetail)

router.get('/cart', getCart)
router.post('/cart', addToCart)

router.get('/orders', getOrders)

router.get('/checkout', getCheckout)
