import { Router } from 'express'
import teams_controller from '../controllers/teams.controller.js'
const teams_router = Router()

// teams_router.post('/create')
teams_router.post('/join/:team_index',teams_controller.join)
// teams_router.get('/:team_name')

export default teams_router
