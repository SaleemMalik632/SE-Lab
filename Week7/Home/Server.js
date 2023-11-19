const express = require('express');
const router =  require('./routes/UserRoutes');
const ConnectToDatabase = require('./utils/Connection');
const cors = require('cors');

const App = express();

App.use(cors());


const port = 5000;
App.use(express.json());
App.use('/api', router);
App.listen(port, () => {
    ConnectToDatabase();
    console.log(`The server is running on the port ${port}`);
});

