import * as response from '../config/response.js'
import { sucResponse, errResponse } from '../config/baseResponse.js'
import maps_service from '../services/maps.service.js'

export default class maps_controller {
    static async maps(req, res) {
        const user_index = req.headers.authorization
        try {
            const mapResponse = await maps_service.maps(user_index)
            return res.json(sucResponse(response.MAP_CHECK_SUCCESS, mapResponse))
        } catch (err) {
            return res.json(errResponse(response.MAP_CHECK_FAIL, err))
        }
    }
    static async mapLocally(req, res) {
        const user_index = req.headers.authorization
        const location_index = req.params.location_index

        try {
            const mapResponse = await maps_service.mapLocally(user_index, location_index)
            return res.json(sucResponse(response.MAP_CHECK_SUCCESS, mapResponse))
        } catch (err) {
            return res.json(errResponse(response.MAP_CHECK_FAIL, err))
        }
    }
}
