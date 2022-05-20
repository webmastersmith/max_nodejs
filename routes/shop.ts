import { Router } from 'express'
import { getShopIndex, getCart, getProductList } from '../controllers/shop'

export const router = Router()

router.get('/', getShopIndex)

router.get('/products', getProductList)

router.get('/cart', getCart)

router.get('/checkout')
