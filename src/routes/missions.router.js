import { Router } from 'express'
import { uploadPhotoMiddleware } from '../middleware/multer.js'
import missions_controller from '../controllers/missions.controller.js'
const missions_router = Router()


missions_router.get('/', missions_controller.getInfo)

missions_router.post('/start', missions_controller.startMission)

missions_router.post('/complete/:mission_index', uploadPhotoMiddleware, missions_controller.completeMission)

export default missions_router
