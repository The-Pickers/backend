import { Router } from 'express'
const teams_router = Router()

teams_router.post('/create')
teams_router.post('/join/:team_index')
teams_router.get('/:team_name')

export default teams_router
