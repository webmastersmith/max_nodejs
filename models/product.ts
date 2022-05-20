import fs from 'fs'
import path from 'path'

// const products: { [k: string]: any }[] = []
const dataPath = path.join(process.cwd(), 'data', 'product.json')
export class Product {
  title: string
  constructor(title: string) {
    this.title = title
  }
  fileExist = false
  save() {
    if (!this.fileExist) {
      // check if file exist, if not create it.
      if (!fs.existsSync(dataPath)) {
        fs.writeFileSync(dataPath, JSON.stringify([]))
        this.fileExist = true
      }
    }
    try {
      const products = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
      fs.writeFileSync(dataPath, JSON.stringify([...products, this]))
    } catch (error) {
      fs.writeFileSync(dataPath, JSON.stringify([this]))
    }
  }
  static fetchAll() {
    try {
      return JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
    } catch (error) {
      return []
    }
  }
}
