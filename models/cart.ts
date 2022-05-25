import fs from 'fs'
import path from 'path'
import { Product } from './product'

const cartPath = path.join(process.cwd(), 'data', 'cart.json')
type CartType = {
  products: Product[]
  total: number
}
export class Cart {
  static getTotal(products: Product[]): number {
    return products.reduce(
      (acc, cur) => parseFloat(cur.price) * cur.qty + acc,
      0
    )
  }

  static addToCart(product: Product): void {
    fs.readFile(cartPath, 'utf-8', (err, data) => {
      let cart: CartType = {
        products: [],
        total: 0,
      }
      if (!err) {
        cart = JSON.parse(data)
      }

      let { products } = cart

      // if product is in cart just increase qty. else add item to cart.
      if (products.some((p) => p.uuid === product.uuid)) {
        for (let i = 0; i < products.length; i++) {
          if (product.uuid === products[i].uuid) {
            products[i].qty++
            break
          }
        }
      } else {
        products = [...products, product]
      }

      // file exist so add product to it.
      fs.writeFileSync(
        cartPath,
        JSON.stringify({ products, total: this.getTotal(products) })
      )
    })
  } //end addToCart

  static deleteFromCart(id: string) {
    fs.readFile(cartPath, 'utf-8', (err, data) => {
      let cart: CartType = { products: [], total: 0 }
      if (!err) {
        cart = JSON.parse(data)
      }
      // check if item is in cart, if so, delete it.
      if (cart.products.some((p) => p.uuid === id)) {
        const products = cart.products.filter((product) => product.uuid !== id)
        fs.writeFileSync(
          cartPath,
          JSON.stringify({ products, total: this.getTotal(products) })
        )
      }
    })
  }

  static fetchAll(): CartType {
    let cart: CartType
    try {
      cart = JSON.parse(fs.readFileSync(cartPath, 'utf-8'))
    } catch (error) {
      cart = { products: [], total: 0 }
      console.log(error)
    }
    return cart
  }
}
