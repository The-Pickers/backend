import { HttpStatusCode } from 'axios'
import { sucResponse, errResponse } from '../config/baseResponse.js'
import * as response from '../config/response.js'
import rank_service from '../services/rank.service.js'

export default class rank_controller {
    static async userRank(req,res){
        const user_index = req.headers.authorization
        try{
            const rankResponse = await rank_service.userRank(user_index)
            res.status(HttpStatusCode.Ok).json(sucResponse(response.TEAM_JOIN_SUCCESS,rankResponse))
        }
        catch(err){
            res.status(HttpStatusCode.InternalServerError).json(errResponse(response.TEAM_JOIN_FAIL,err))
        }
    }
}
