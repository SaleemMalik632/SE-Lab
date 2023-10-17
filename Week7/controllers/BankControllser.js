const Bank = require('../model/Bank');

// making the get api

async function getallBanks(req, res) {
    try{
        const Data = await Bank.find();
        res.json(Data);
    }catch(error){
        res.status(500).json({error:error.mesage})
    }
}

// making the post the data in the database

async   function AddNewBank(req, res) {
      try{
            const result = await Bank.create(req.body);
            res.status(201).json(result);
      }catch(error){
          res.status(500).json({error:error.mesage})
      } 
}

// making the delete api bank data
async function deleteBank(req, res) {
     try{
         const result = await Bank.findByIdAndDelete(req.params.id);
         res.status(201).json(result);
     }catch(error){
         res.status(500).json({error:error.mesage})
     }     
} 

// making the update api bank data  
async function updateBank(req, res) {
    try {
        const updatedBank = await Bank.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBank);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// export all these functions
module.exports = {
    getallBanks,
    AddNewBank,
    deleteBank,
    updateBank,
} 
