import { prisma } from '../config/prisma.config.js'

export default class signup_models {
    static async selectUser(user_id){
        const result = await prisma.USERS.findMany({
            where : {
                user_id : user_id
            }
        })
        return result
    }

    static async insertUser(data) {
        const result = await prisma.USERS.create({
            data: {
                user_id : data.user_id,
                user_password : data.user_password,
                user_name : data.user_name,
            }
        })
        return result
    }
}
