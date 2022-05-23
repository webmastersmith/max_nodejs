import { Router } from 'express'
import {
  getShopIndex,
  getCart,
  getProductList,
  getCheckout,
  getOrders,
} from '../controllers/shop'

export const router = Router()

router.get('/', getShopIndex)

router.get('/products', getProductList)

router.get('/cart', getCart)

router.get('/orders', getOrders)

router.get('/checkout', getCheckout)
