export class login {
    constructor(data = {}) {
        const {user_id = "",user_password = ""} = data

        this.user_id = user_id
        this.user_password = user_password 
    }
}

export class login_token {
     constructor(data = {}) {
        const {user_index = ""} = data

        this.token = user_index
    }
}