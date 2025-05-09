import { Router } from 'express'
import teams_controller from '../controllers/teams.controller.js'
const teams_router = Router()

teams_router.post('/create',teams_controller.create)
teams_router.post('/join/:team_index',teams_controller.join)
teams_router.post('/search',teams_controller.search)

export default teams_router

