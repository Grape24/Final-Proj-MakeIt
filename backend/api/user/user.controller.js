const userService = require('./user.service')

async function getUser(req, res) {
    const user = await userService.getById(req.params.id)
    res.send(user)
}
  
async function getUsers(req, res) {
    console.log(req.query);
    const users = await userService.query(req.query)
    res.send(users)
}



module.exports = {
    getUser,
    getUsers,
   
}