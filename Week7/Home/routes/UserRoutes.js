const Routes = require("express").Router();
const { GetAllUser, AddNewUser, DeleteUser, UpdateUser } = require("../Controller/UserController");
Routes.get("/GetAllUsers", GetAllUser);
Routes.post("/AddNewUser", AddNewUser);
Routes.delete("/DeleteUser/:id", DeleteUser);
Routes.put("/UpDateUser/:id", UpdateUser); 
module.exports = Routes;   // export the routes