import { prisma } from "../config/prisma.config.js"

export default class teams_model {
    static async joinTeam(data){

        const result = await prisma.USERS.update({
            where:{
                user_index : data.user_index
            },
            data : {
                team_index : data.team_index
            },

        })
        return result
    }

    static async selectTeamIndex(team_index){
        const result = await prisma.TEAMS.findMany({
            where:{
                team_index : team_index
            }

        })
        return result
    }

    static async createTeam(data){

        const result = await prisma.TEAMS.create({
            data : {
                team_index : data.team_index,
                team_name : data.team_name,
                team_profile : data.team_profile,
                team_decription : data.team_decription
            }
        })
        return result
    }

    static async selectTeamName(team_name){
        const result = await prisma.TEAMS.findMany({
            where : {
                team_name : {
                    contains : team_name,
                }
            },
            select : {
                team_index : true,
                team_name : true,
                team_profile : true,
                team_description : true,
            }
        })
        return result
    }
    
}
