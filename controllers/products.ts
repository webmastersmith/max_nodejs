import { Request, Response, NextFunction } from 'express'
import { Product } from '../models/product'

export const getAddProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = Product.fetchAll()
  console.log('products', products)

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
  const product = new Product(req.body.title)
  product.save()
  res.redirect('/')
}

export const shopAddProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = Product.fetchAll()
  res.render('shop', { products, pageTitle: 'Shop', path: '/' })
}
