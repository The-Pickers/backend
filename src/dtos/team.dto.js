export class team_join {
    constructor(data = {}) {
        const {user_index = 0,team_index = 0} = data
        this.user_index = parseInt(user_index)
        this.team_index = parseInt(team_index)
    }
}
