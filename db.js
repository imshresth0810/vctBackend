require('dotenv').config()
const mongoose = require('mongoose');
const mongostr = process.env.MONGO_URI1;
const connectToMongo = () => {
    mongoose.connect(mongostr, () => {
        console.log("MongoDB connection Successfull");
    })
}
module.exports = connectToMongo;

