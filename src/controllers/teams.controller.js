import * as response from "../config/response.js"
import { sucResponse, errResponse } from "../config/baseResponse.js"
import teams_service from "../services/teams.service.js"
import { HttpStatusCode } from "axios"
import { team_join } from "../dtos/team.dto.js"

export default class teams_controller {
    static async join(req,res){
        const user_index = req.headers.authorization
        const team_index = req.params.team_index

        const data = new team_join({user_index,team_index})

        try{
            const joinResponse = await teams_service.join(data)
            res.status(HttpStatusCode.Ok).json(sucResponse(response.TEAM_JOIN_SUCCESS,joinResponse))
        }  
        catch(err){
            res.status(HttpStatusCode.InternalServerError).json(errResponse(response.TEAM_JOIN_FAIL,err))
        }

    }
}
