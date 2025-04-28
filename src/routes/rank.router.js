import { Router } from 'express'
const rank_router = Router()

rank_router.get('/personal')
rank_router.get('/team')

export default rank_router
