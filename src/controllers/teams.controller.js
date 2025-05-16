import * as response from "../config/response.js"
import { sucResponse, errResponse } from "../config/baseResponse.js"
import teams_service from "../services/teams.service.js"
import { HttpStatusCode } from "axios"
import { team_join,team_create } from "../dtos/team.dto.js"

export default class teams_controller {
    static async create(req,res){
        const user_index = req.headers.authorization
        const team_name = req.body.team_name
        const team_profile = req.body.team_profile
        const team_description = req.body.team_description

        const data = new team_create({user_index,team_name,team_profile,team_description})

        try{
            const createResponse = await teams_service.create(data)
            res.status(HttpStatusCode.Ok).json(sucResponse(response.TEAM_CREATE_SUCCESS,createResponse))
        }
        catch(err){
            res.status(HttpStatusCode.InternalServerError).json(errResponse(response.TEAM_CREATE_FAIL,err))
        }
    }

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

    static async search(req,res){
        const team_name = req.body.team_name
        try{
            const searchResponse = await teams_service.search(team_name)
            res.status(HttpStatusCode.Ok).json(sucResponse(response.TEAM_SEARCH_SUCCESS,searchResponse))
        }
        catch(err){
            res.status(HttpStatusCode.InternalServerError).json(errResponse(response.TEAM_SEARCH_FAIL,err))
        }

    }
}
