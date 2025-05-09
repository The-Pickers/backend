import { Router } from 'express'
import rank_controller from '../controllers/rank.controller.js'
const rank_router = Router()

rank_router.get('/personal',rank_controller.userRank)
// rank_router.get('/team')

export default rank_router
