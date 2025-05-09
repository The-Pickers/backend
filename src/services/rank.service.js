import rank_model from "../models/rank.model.js"

export default class rank_service {
    static async userRank(user_index){
        const check = await rank_model.selectAllRank()
        let my
        for(const ran of check){
            if(ran.user_index == user_index){
                my = ran
                break
            }
        }   
        return my
    }
}
