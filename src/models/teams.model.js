import { prisma } from "../config/prisma.config.js"

export default class teams_model {
    static async insertTeam(data){
        console.log(data)
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
}
