import * as response from '../config/response.js'
import { sucResponse, errResponse } from '../config/baseResponse.js'
import StatusCodes from 'http-status-codes'
import missions_service from '../services/missions.service.js'
import { mission_complete } from '../dtos/mission.dto.js'
import { HttpStatusCode } from 'axios'

export default class missions_controller {
    static async getInfo(req, res) {
        const user_index = req.headers.authorization
        try {
            const getInfoResponse = await missions_service.getInfo(user_index)
            return res.json(sucResponse(response.USER_HOME_SUCCESS, getInfoResponse))
        } catch (err) {
            return res.json(errResponse(response.USER_HOME_FAIL, err))
        }
    }

    static async startMission(req, res) {
        const user_index = req.headers.authorization

        try {
            const startResponse = await missions_service.startMission(user_index)
            return res.status(HttpStatusCode.Ok).json(sucResponse(response.MISSION_START_SUCCESS, startResponse))
        } catch (err) {
            return res.status(HttpStatusCode.InternalServerError).json(errResponse(response.MISSION_START_FAIL, err))
        }
    }

    static async completeMission(req, res) {
        const user_index = req.headers.authorization
        const photo = req.file.buffer.toString('base64') // 분석 서버로 전송한다
        const mission_index = req.params.mission_index
        const location_index = req.body.location_index
        const date_time = new Date()

        const body = new mission_complete({ user_index, photo, mission_index, location_index, date_time })

        try {
            const aiResponse = await missions_service.completeMission(body)
            res.status(HttpStatusCode.Ok).json(sucResponse(response.MAP_CHECK_SUCCESS))
        } catch (err) {
            res.status(HttpStatusCode.InternalServerError).json(errResponse(response.USER_HOME_FAIL, err))
        }

        // try{
        //     const uploadResponse
        // }
    }
}
