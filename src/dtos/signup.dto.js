export class signup {
    constructor(data = {}) {
        const {user_id = "",user_password = "",user_name = ""} = data

        this.user_id = user_id
        this.user_password = user_password 
        this.user_name = user_name
    }
}
