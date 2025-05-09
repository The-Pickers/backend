import maps_model from '../models/maps.model.js'

export default class maps_service {
    static async maps(user_index) {
        const check = await maps_model.selectUserInfo(user_index)
        if (!check || check.length == 0) {
            throw new Error('유저 정보를 찾을 수 없습니다.')
        }
        const result = await maps_model.selectMissioㅈnCount(user_index)
        if (!result || result.length == 0) {
            throw new Error('조회 실패')
        }
        return result
    }

    static async mapLocally(user_index, location_index) {
        const check = await maps_model.selectUserInfo(user_index)
        if (!check || check.length == 0) {
            throw new Error('유저 정보를 찾을 수 없습니다.')
        }
        const result = await maps_model.selectMissionCountLocally(user_index, location_index)
        if (!result || result.length == 0) {
            throw new Error('조회 실패')
        }
        return result
    }
}
