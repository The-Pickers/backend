import { Router } from 'express'
import maps_controller from '../controllers/maps.controller.js'
const maps_router = Router()

maps_router.get('/', maps_controller.maps)
maps_router.get('/:location_index', maps_controller.mapLocally)

export default maps_router
