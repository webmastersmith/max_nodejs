import { Request, Response, NextFunction } from 'express'
import { Product } from '../models/product'

//ADMIN
export const getAddProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = Product.fetchAll()

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
  const {
    title = 'title',
    imgUrl = 'https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png',
    description = 'A very interesting book about so many even more interesting things!',
    price = 'no price',
  } = req.body
  const product = new Product(title, imgUrl, description, price)
  product.save()
  res.redirect('/')
}

export const adminProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = Product.fetchAll()
  res.render('admin/products', {
    products,
    pageTitle: 'Admin Products',
    path: '/admin/products',
  })
}
export const editProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = Product.fetchAll()
  res.render('admin/edit-product', {
    products,
    pageTitle: 'Edit Product',
    path: '/admin/products',
  })
}
