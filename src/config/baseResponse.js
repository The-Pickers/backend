export const sucResponse = ({ success, message, code }, data) => {
    return {
        success: success,
        message: message,
        code: code,
        data: data,
    }
}

export const errResponse = ({ success, message, code }, err) => {
    return {
        success: success,
        message: message,
        code: code,
        err: {
            message: err?.message || 'Unknown error',
            stack: err?.stack || null,
        },
    }
}
