const express = require('express');

const bodyParser = require('body-parser');

const dbConnect = require('./config/dbConnect');

const {notFound, errorHandler} = require('./middlewares/errorHandler');

const app = express();

const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3000;

const authRouter = require('./routes/authRoute');


dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.use('/', (req, res) => {
//     res.send("Welcome")
// });

app.use('/api/user', authRouter);


//không tìm thấy
app.use(notFound);
// lỗi chung
app.use(errorHandler);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});