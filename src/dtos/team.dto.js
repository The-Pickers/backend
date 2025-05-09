export class team_join {
    constructor(data = {}) {
        const {user_index = 0,team_index = 0} = data
        this.user_index = parseInt(user_index)
        this.team_index = parseInt(team_index)

    }
}

export class team_create {
    constructor(data = {}) {
        const {user_index = 0, team_name = "", team_profile = "",team_description = ""} = data

        this.user_index = parseInt(user_index)
        this.team_name = team_name
        this.team_profile = team_profile
        this.team_description = team_description

        
    }
}
