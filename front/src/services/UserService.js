import HttpService from './HttpService'



export default {
    signup,
}



async function signup(userCred) {
    console.log(userCred)
     const user = await HttpService.post('auth/signup', userCred)
     return _handleLogin(user)
}

function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    console.log('ending')
    return user;
}