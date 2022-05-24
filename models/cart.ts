import fs from 'fs'
import path from 'path'
import { Product } from './product'

const cartPath = path.join(process.cwd(), 'data', 'cart.json')
const cartArr: Product[] = []

export class Cart {
  static addToCart(product: Product): void {
    fs.readFile(cartPath, 'utf-8', (err, data) => {
      let cart = { products: [], total: 0 }
      if (!err) {
        cart = JSON.parse(data)
      }

      let { products } = cart as { products: Product[]; total: number }

      // if product is in cart just increase qty. else add item to cart.
      if (products.some((p) => p.uuid === product.uuid)) {
        for (let i = 0; i < products.length; i++) {
          if (product.uuid === products[i].uuid) {
            products[i].qty++
          }
        }
      } else {
        products = [...products, product]
      }

      const total = products.reduce(
        (acc, cur) => parseFloat(cur.price) * cur.qty + acc,
        0
      )

      // file exist so add product to it.
      fs.writeFileSync(cartPath, JSON.stringify({ products, total }))
    })
  }

  static fetchAll() {
    return cartArr
  }
}
