import HttpService from './HttpService.js'

export default {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update
}

function getById(userId) {
    try {
        return HttpService.get(`user/${userId}`)
    }
    catch (err) {
        console.log(err)
    }
}
function remove(userId) {
    try {
        return HttpService.delete(`user/${userId}`)
    }
    catch (err) {
        console.log(err)
    }

}

function update(user) {
    try {
        return HttpService.put(`user/${user._id}`, user)
    }
    catch (err) {
        console.log(err)
    }
}

async function login(userCred) {
    try {
        const user = await HttpService.post('auth/login', userCred)
        return _handleLogin(user)
    }
    catch (err) {
        console.log(err)
    }
}

async function signup(userCred) {
    try {
        const user = await HttpService.post('auth/signup', userCred)
        return _handleLogin(user)
    }
    catch (err) {
        console.log(err)
    }
}

async function logout() {
    try {
        await HttpService.post('auth/logout');
        sessionStorage.clear();
    }
    catch (err) {
        console.log(err)
    }
}

function getUsers() {
    try {
        return HttpService.get('user')
    }
    catch (err) {
        console.log(err)
    }
}

function _handleLogin(user) {
    if (user) {
        sessionStorage.setItem('user', JSON.stringify(user))
    }
    return user;
}