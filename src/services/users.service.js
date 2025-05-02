import { homeDTO } from '../dtos/userDTO.js'
import users_model from '../models/users.model.js'

export default class users_service {
    static async home(user_index) {
        const result = await users_model.selectMissionInfo(user_index)
        if (!result || result.length == 0) {
            throw new Error('유저 정보를 찾을 수 없습니다.')
        }
        const res = new homeDTO(result[0])
        return res
    }
}
