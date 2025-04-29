export class homeDTO {
    constructor(data = {}) {
        const { score_log_total_score = 0, score_log_carbon_reduction = 0, user_mission_count = 0 } = data

        this.total_score = score_log_total_score || 0
        this.carbon_reduction = score_log_carbon_reduction || 0
        this.mission_count = user_mission_count || 0
    }
}
