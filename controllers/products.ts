import { Request, Response, NextFunction } from 'express'
import { Product } from '../models/product'

export const products = []

export const getAddProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('Add-Product page')
  res.render('add-product', {
    prods: products,
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  })
}

export const postAddProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('Product page')
  const data = req.body
  console.log(data)
  const product = new Product(data)
  res.redirect('/')
}

export const shopAddProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render('shop', { products, pageTitle: 'Shop', path: '/' })
}
