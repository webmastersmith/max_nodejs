import { Router } from 'express'
import { showAddProducts } from '../controllers/products'

export const router = Router()

router.get('/', showAddProducts)
