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
  res.render('admin/add-product', {
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

export const showAddProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = Product.fetchAll()
  res.render('shop/product-list', {
    products,
    pageTitle: 'Product List',
    path: '/',
  })
}

// products
export const products = (req: Request, res: Response, next: NextFunction) => {
  const products = Product.fetchAll()
  res.render('admin/products', {
    products,
    pageTitle: 'Admin Products',
    path: '/admin/products',
  })
}
export const editProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = Product.fetchAll()
  res.render('admin/edit-products', {
    products,
    pageTitle: 'Edit Products',
    path: '/admin/edit-products',
  })
}
