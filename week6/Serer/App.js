const express = require('express');
const Connection_ = require('../utils/Connection');
const Prodect_routes = require('../routes/Add')
const app = express();
app.use(express.json());


app.use('/api', Prodect_routes);
 

app.listen(3000, () => {  
    Connection_();
  console.log('Server is running on port 3000');
}); 