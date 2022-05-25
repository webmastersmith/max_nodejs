import { Router } from 'express'
import {
  getShopIndex,
  getCart,
  getProductList,
  getCheckout,
  getOrders,
  getProductListDetail,
  addToCart,
  cartDeleteItem,
} from '../controllers/shop'

export const router = Router()

router.get('/', getShopIndex)

router.get('/products', getProductList)

router.get('/products/:uuid', getProductListDetail)

router.get('/cart', getCart)
router.post('/cart', addToCart)
router.post('/cart-delete-item', cartDeleteItem)

router.get('/orders', getOrders)

router.get('/checkout', getCheckout)
