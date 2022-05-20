import { Request, Response, NextFunction } from 'express'
import { Product } from '../models/product'

export const getShopIndex = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = Product.fetchAll()
  res.render('shop/index', {
    products,
    pageTitle: 'Shop',
    path: '/',
  })
}

// products
export const getProductList = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = Product.fetchAll()
  res.render('shop/product-list', {
    products,
    pageTitle: 'All Products',
    path: '/products',
  })
}

//shop
export const getCart = (req: Request, res: Response, next: NextFunction) => {
  const products = Product.fetchAll()
  res.render('shop/cart', { products, pageTitle: 'Cart', path: '/cart' })
}
