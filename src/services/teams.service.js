import teams_model from "../models/teams.model.js";

export default class teams_service {
    static async join(data){
        const result = await teams_model.insertTeam(data)
        if(!result){
            throw new Error('조인 실패')
        }
        return result
    }
}
