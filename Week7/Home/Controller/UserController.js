const User = require('../Models/User');
const MyUser = require('../Models/MyUser');
const jwt = require('jsonwebtoken');


// making the get api
async function GetAllUser(Req, Res) {
    try {
        const Data = await MyUser.find();
        console.log(Data);
        Res.status(200).json(Data);
    } catch (error) {
        console.log(error);
        Res.status(500).json({ error: error.mesage })
    }
}
// Poat Api to Post all the Data in the Database




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
    } catch (error) {
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

// fuction for the user verfication 
async function login(req, res, next) {
    const { Email, Password } = req.body;
    try {
        const user = await User.findOne({ Email });
        console.log(user)
        if (!user) return res.status(404).json({ error: 'User not found' });
        if (user.Password != Password) return res.status(401).json({ error: 'Invalid credentials' });
            var token = GenerateToken(user);
            console.log(token)
            return res.status(200).json({message: 'Logged in successfully',Email: Email,Name: user.Name,userid: user.id,token: token}); 
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};

async function Wellcome(req , res) {
   return res.status(200).json({message:'Wellcome Admin Bhai'});
}



// post request for the MyUser login
async function PostProjetUser(Req, Res) {
    try {
        const Data = Req.body;
        console.log(Data);
        const result = await MyUser.create(Data);
        Res.status(201).json(result);
    } catch (error) {
        Res.status(500).json({ error: error.mesage })
    }
} 






const GenerateToken = (user) => {
    const payload = {
        Role: user.Role,
        id: user._id,
    };
    const token = jwt.sign(payload, '652ec29f3beb5a545122b2ed2321@##*&^^');
    return token;
};






// Export all the functions 
module.exports = {
    GetAllUser,
    AddNewUser,
    DeleteUser,
    UpdateUser,
    login,
    Wellcome,
    PostProjetUser,
};





