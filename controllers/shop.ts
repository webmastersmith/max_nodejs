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

export const getCart = (req: Request, res: Response, next: NextFunction) => {
  const products = Product.fetchAll()
  res.render('shop/cart', { products, pageTitle: 'Your Cart', path: '/cart' })
}

export const getCheckout = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = Product.fetchAll()
  res.render('shop/checkout', {
    products,
    pageTitle: 'Checkout',
    path: '/checkout',
  })
}
