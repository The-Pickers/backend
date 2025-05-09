import missions_model from '../models/missions.model.js'
import { getResult } from '../config/connectAI.js'

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
        const message = await getResult(body.photo)
        if (!message || message.length == 0) {
            throw new Error('ai analyze server error')
        }

        body.carbon_reduction = message.total_carbon
        body.detected_waste = message.detected_objects
        body.score = message.points 
        body.message = message.message
        let total = 0
        if (message.detected_objects && typeof message.detected_objects === 'object') {
            body.detected_waste_types = Object.keys(message.detected_objects); // ex: ['Carton', 'Plastic bag - wrapper']
            body.detected_waste_counts = Object.values(message.detected_objects); // ex: [1, 7]
            for(const count of body.detected_waste_counts){
                total += count
            }
        }
        body.detected_waste = total
        
        const update = await missions_model.updateMissionInfo(body)
        if(!update || update.length == 0){
            throw new Error('미션 완료 실패')
        }
        const result = await missions_model.selectMission(body)
        if(!result || result.length == 0){
            throw new Error("미션 완료 실패")
        }
        const ms = result[0].mission_take_time
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / (1000 * 60)) % 60);
        const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
        
        result[0].mission_take_time = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;


        return result
    }
}
