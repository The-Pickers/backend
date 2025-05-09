import { use } from "react"

export class rank {
    constructor(data = {}) {
        const {user_index = 0, user_name = "",user_rank = 0, user_total} = data

        this.index = user_index
        this.name = user_name
        this.rank = user_rank
        this.info = user_total
    }
}
