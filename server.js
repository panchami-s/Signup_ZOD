const express = require('express');
const app = express();

app.use(express.json());

const authroutes = require('./routes/authroutes');
app.use('/auth', authroutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});