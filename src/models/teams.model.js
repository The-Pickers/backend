import { prisma } from "../config/prisma.config.js"

export default class teams_model {
    static async joinTeam(data){

        const result = await prisma.USERS.update({
            where:{
                user_index : data.user_index
            },
            data : {
                team_index : data.team_index
            }
        })
        return result
    }
    static async createTeam(data){

        const result = await prisma.TEAMS.create({
            data : {
                team_index : data.team_index,
                team_name : data.team_name,
                team_profile : data.team_profile
            }
        })
        return result
    }
}
