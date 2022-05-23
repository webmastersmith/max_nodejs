import { Request, Response, NextFunction } from 'express'
import { Product } from '../models/product'

//ADMIN
export const getAddProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = Product.fetchAll()

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

export const getEditProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params?.uuid ?? ''

  const products = Product.fetchAll()
  const [product] = products.filter(({ uuid }) => id === uuid)

  res.render('admin/edit-product', {
    product,
    pageTitle: 'Edit Product',
    path: '/admin/edit-product',
  })
}
export const postEditProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title = '', imgUrl = '', description = '', price = '' } = req.body

  const id = req.params?.uuid ?? ''

  const products = Product.fetchAll()
  const idx = products.findIndex((item) => item.uuid === id)
  const product = products.splice(idx, 1)[0]

  product.title = title
  product.description = description
  product.imgUrl = imgUrl
  product.price = price
  products.splice(idx, 0, product)
  Product.saveAll(products)

  res.redirect('/admin/products')
}
export const postDeleteProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params?.uuid ?? ''
  const products = Product.fetchAll().filter((item) => item.uuid !== id)
  Product.saveAll(products)

  res.redirect('/admin/products')
}
