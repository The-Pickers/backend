import missions_model from '../models/missions.model.js'
import { checkAI } from '../config/connectAI.js'

export default class missions_service {
    static async startMission(user_index) {
        const check = await missions_model.selectUserInfo(user_index)
        if (!check || check.length == 0) {
            throw new Error('유저 정보를 찾을 수 없습니다.')
        }
        const body = {
            user_index: user_index,
            start_time: new Date(),
        }
        const result = await missions_model.insertMissionInfo(body)
        if (!result) {
            throw new Error('미션 시작 실패')
        }
        return {
            missison_index: result,
        }
    }

    static async getInfo(user_index) {
        const check = await missions_model.selectUserInfo(user_index)
        if (!check || check.length == 0) {
            throw new Error('유저 정보를 찾을 수 없습니다.')
        }
        const result = await missions_model.selectAllMission(user_index)
        if (!result || result.length == 0) {
            throw new Error('미션 정보를 찾을 수 없습니다.')
        }
        return result
    }

    static async completeMission(body) {
        const message = await checkAI(body.photo)
        if (!message || message.length == 0) {
            throw new Error('ai analyze server error')
        }

        const result = await missions_model.updateMissionInfo(body)
    }
}
