// export const SERVER_WRONG_ENDPOINT = {
//     isSuccess: false,
//     message: 'approach to wrong end point',
//     code: 404,
// }
// export const SERVER_ERROR = {
//     isSuccess: false,
//     message: 'server error occur',
//     code: 500,
// }

// // EXTERNAL ERROR RESPONSE CODE
// export const DB_ERROR = {
//     isSuccess: false,
//     message: 'database error',
//     code: 500,
// }
// export const AWS_SERVER_ERROR = {
//     isSuccess: false,
//     message: 'error on aws server',
//     code: 500,
// }
// export const JWT_DECODED_ERROR = {
//     isSuccess: false,
//     message: 'error on middleware jwt',
//     code: 500,
// }

// // AUTH ROUTER RESPONSE CODE

// export const AUTH_LOGIN_SUCCESS = {
//     isSuccess: true,
//     message: 'login success',
//     code: 200,
// }
// export const AUHT_LOGIN_NOSUCHID = {
//     isSuccess: false,
//     message: 'no such id',
//     code: 400,
// }
// export const AUTH_LOGIN_WRONGPASSWORD = {
//     isSuccess: false,
//     message: 'wrong password',
//     code: 400,
// }
// export const AUTH_REGISTER_EXISTID = {
//     isSuccess: false,
//     message: 'already exist id',
//     code: 400,
// }
// export const AUTH_REGISTER_EXISTNAME = {
//     isSuccess: false,
//     message: 'alreay exist name',
//     code: 400,
// }
// export const AUTH_REGISTER_SUCCESS = {
//     isSuccess: true,
//     message: 'register success',
//     code: 200,
// }
// export const AUTH_REGISTER_DBERROR = {
//     isSuccess: false,
//     message: 'DB INSERT ERROR',
//     code: 500,
// }

// // USER ROUTER RESPONSE CODE

// export const USER_JWT_EXPIRED = {
//     isSuccess: false,
//     message: 'token is expired',
//     code: 401,
// }
// export const USER_JWT_INVAILD = {
//     isSuccess: false,
//     message: 'token is invaild',
//     code: 401,
// }
// export const USER_JWT_NOTDECODED = {
//     isSuccess: false,
//     message: "token didn't decoded",
//     code: 401,
// }
// export const USER_MAIN_ERROR = {
//     isSuccess: false,
//     message: 'no such user in DB',
//     code: 401,
// }
// export const USER_MAIN_SUCCESS = {
//     isSuccess: true,
//     message: 'success to get user info',
//     code: 200,
// }
// export const USER_PROFILE_SUCCESS = {
//     isSuccess: true,
//     message: 'success to update user profile',
//     code: 200,
// }
// export const USER_PROFILE_ERROR = {
//     isSuccess: true,
//     message: 'error on update user profile',
//     code: 400,
// }

// // PHOTO ROUTER RESPONSE CODE

// export const PHOTO_UPLOAD_SUCCESS = {
//     isSuccess: true,
//     message: 'success to upload photo',
//     code: 200,
// }
// export const PHOTO_UPLOAD_ERROR = {
//     isSuccess: false,
//     message: 'error on upload photo',
//     code: 401,
// }
// export const PHOTO_INFO_SUCCESS = {
//     isSuccess: true,
//     message: 'success to check user photos',
//     code: 200,
// }
// export const PHOTO_INFO_ERROR = {
//     isSuccess: false,
//     message: 'fail to check user photos',
//     code: 400,
// }
// export const PHOTO_DELETE_SUCCESS = {
//     isSuccess: true,
//     message: 'success to delete photo',
//     code: 200,
// }

export const USER_HOME_SUCCESS = {
    success: true,
    message: 'success to get user home',
    code: 200,
}
export const USER_HOME_FAIL = {
    success: false,
    message: 'fail to get user home',
    code: 401,
}
