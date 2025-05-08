export class signup {
    constructor(data = {}) {
        const {user_id = "",user_password = "",user_name = "",user_birthday = ""} = data

        this.user_id = user_id
        this.user_password = user_password 
        this.user_name = user_name
        this.user_birthday = new Date(user_birthday)
    }
}
