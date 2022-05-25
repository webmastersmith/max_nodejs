import { Request, Response, NextFunction } from 'express'
import { Cart } from '../models/cart'
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
    pageTitle: 'Product Details',
    path: '/products',
  })
}

export const getProductListDetail = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params?.uuid ?? ''
  const product = Product.getProduct(id)
  res.render('shop/product-detail', {
    product,
    pageTitle: product.title,
    path: `/products`, //used to highlight navigation links
  })
}

export const getCart = (req: Request, res: Response, next: NextFunction) => {
  const { products, total } = Cart.fetchAll()
  res.render('shop/cart', {
    products,
    total,
    pageTitle: 'Your Cart',
    path: '/cart',
  })
}

export const getOrders = (req: Request, res: Response, next: NextFunction) => {
  const products = Product.fetchAll()
  res.render('shop/orders', {
    products,
    pageTitle: 'Your Orders',
    path: '/orders',
  })
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

export const addToCart = (req: Request, res: Response, next: NextFunction) => {
  const id: string = req.body?.uuid?.trim() ?? ''
  const product = Product.fetchAll().filter((item) => item.uuid === id)[0]
  Cart.addToCart(product)

  res.redirect('/cart')
}

export const cartDeleteItem = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.body?.uuid?.trim() ?? ''
  Cart.deleteFromCart(id)
  res.redirect('/cart')
}
