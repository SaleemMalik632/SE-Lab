const Routes = require("express").Router();
const AuthenticationMiddleware = require('../utils/AuthenticationMiddleware')
const requireRoles = require('../utils/RolebaseAuthorization');
const { GetAllUser, AddNewUser, DeleteUser, UpdateUser, login, Wellcome ,PostProjetUser} = require("../Controller/UserController");
Routes.get("/GetAllUsers", GetAllUser);
Routes.post("/AddNewUser", AddNewUser);
Routes.delete("/DeleteUser/:id", DeleteUser);
Routes.put("/UpDateUser/:id", UpdateUser);
Routes.post('/login', login);
Routes.post('/PostProjetUser', PostProjetUser);
Routes.post('/admin', AuthenticationMiddleware, Wellcome);
Routes.get('/shared', AuthenticationMiddleware ,requireRoles(['Admin']), (req, res) => { res.json({ message: 'Shared endpoint' }); });
module.exports = Routes;   // export the routes

