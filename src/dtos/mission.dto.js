export class mission_complete {
    constructor(data = {}) {
        const { user_index = 0, photo = '', mission_index = 0, location_index = 0, date_time = '' } = data

        this.user_index = user_index
        this.photo = photo
        this.mission_index = mission_index
        this.location_index = location_index
        this.date_time = date_time
    }
}
