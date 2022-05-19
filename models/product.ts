const products = []
export class Product {
  title: string
  constructor(title: string) {
    this.title = title
  }
  save() {
    products.push(this)
  }
  static fetchAll() {
    return products
  }
}
