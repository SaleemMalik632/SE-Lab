const express = require('express');
const router =  require('./routes/UserRoutes');
const ConnectToDatabase = require('./utils/Connection');
const App = express();
const port = 3000;
App.use(express.json());
App.use('/api', router);
App.listen(port, () => {
    ConnectToDatabase();
    console.log(`The server is running on the port ${port}`);
});

