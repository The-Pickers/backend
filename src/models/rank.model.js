import { prisma } from "../config/prisma.config.js";

export default class rank_model {
    static async selectAllRank(){
        const result = await prisma.sCORES_LOG.findMany({
            orderBy : [
                {
                    score_log_total_score : 'desc'
                },
            ],
        })
        const usersWithRank = result.map((user, index) => ({
        ...user,
        rank: index + 1,
        }));
        return usersWithRank
    }


    static async selectMY(user_index) {
        const result = await prisma.sCORES_LOG.findMany({
            orderBy : [
                {
                    score_log_total_score : 'desc'
                },
            ],
        })
        const usersWithRank = result.map((user, index) => ({
        ...user,
        rank: index + 1,
        }));
        return usersWithRank
    }

    static async selectTop(){
        const result = await prisma.sCORES_LOG.findMany({
            orderBy : [
                {
                    score_log_total_score : 'desc'
                },
            ],
        })
        const usersWithRank = result.map((user, index) => ({
        ...user,
        rank: index + 1,
        }));
        return usersWithRank
    }
}
