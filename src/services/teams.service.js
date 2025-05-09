import teams_model from "../models/teams.model.js";

export default class teams_service {
    static async join(data){
        const result = await teams_model.joinTeam(data)
        if(!result){
            throw new Error('조인 실패')
        }
        return result
    }

    static async create(data){
        const result = await teams_model.createTeam(data)
        if(!result){
            throw new Error("셍성 실패")
        }
        data.team_index = result.team_index

        this.join(data)
        return result
    }
}
