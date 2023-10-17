const User = require('../Models/User');


// making the get api
async function GetAllUser(Req, Res) {
    try {
        const Data = await User.find();
        console.log(Data);
        Res.status(200).json(Data);
    } catch (error) {
        console.log(error);
        Res.status(500).json({ error: error.mesage })
    }
}

// Post Api to Post all the Data in the Database
async function AddNewUser(Req, Res) {
    try {
        const Data = Req.body;
        const result = await User.create(Data);
        Res.status(201).json(result);
    } catch (error) {
        Res.status(500).json({ error: error.mesage })
    }
}

// Delete Api to Delete the Data from the Database
async function DeleteUser(Req, Res) {
    try {
        const Data = await User.findByIdAndDelete(Req.params.id);
        Res.status(201).json(Data); 
    }catch (error) {
        Res.status(500).json({ error: error.mesage })
    } 
} 

// Update Api to Update the Data in the Database
async function UpdateUser(Req, Res) {
    try {
        const Result = await User.findByIdAndUpdate(Req.params.id, Req.body, { new: true });
        Res.status(201).json(Result);

    } catch (error) {
        Res.status(500).json({ error: error.mesage })
    }
}


// Export all the functions 
module.exports = {
    GetAllUser,
    AddNewUser,
    DeleteUser,
    UpdateUser,
}; 