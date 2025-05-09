import { prisma } from '../config/prisma.config.js'

export default class login_model {
    static async selectUserID(user_id){
        const result = await prisma.USERS.findMany({
            where : {
                user_id : user_id
            }
    })
    return result
    }
    static async selectUserPassword(user_id,user_password){
        const result = await prisma.USERS.findMany({
            where : {
                user_id : user_id,
                user_password : user_password
            },
            select:{
                user_index : true
            }
    })
    return result
    }
}
