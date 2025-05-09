export class home {
    constructor(data = {}) {
        const { score_log_total_score = 0, score_log_carbon_reduction = 0, user_mission_count = 0 } = data

        this.total_score = score_log_total_score || 0
        this.carbon_reduction = score_log_carbon_reduction || 0
        this.mission_count = user_mission_count || 0
    }
}

export class info{
    constructor(data = {}) {
        const {user_id = "",user_name = "",team_name = "", user_profile = "",user_index = 0} = data

        this.user_index = parseInt(user_index)
        this.id = user_id
        this.name = user_name
        this.team_name = team_name
        this.profile = user_profile || "" 
    }
}