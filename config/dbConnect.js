const {default: mongoose } = require('mongoose');

const dbConnect = () => {
    try{
    const conn = mongoose.connect(process.env.MONGODB_URI);
    console.log(`Kết nối thành công tới database: ${conn.connection.host}`);
}
catch(err){
    console.log(`Error connecting to database: ${err}`);
}  
};
module.exports = dbConnect;
