export const response = ({ success, message, code }, data) => {
    return {
        success: success,
        message: message,
        code: code,
        data: data,
    }
}

export const errResponse = ({ success, message, code }) => {
    return {
        success: success,
        message: message,
        code: code,
    }
}
