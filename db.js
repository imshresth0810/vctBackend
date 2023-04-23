const mongoose = require('mongoose');
const mongostr = "mongodb+srv://imshresth:imshresth@cluster0.6c0eb.mongodb.net/TAdS_VCT?retryWrites=true&w=majority";
// const mongostr = "mongodb://localhost:27017/vct";

const connectToMongo = () => {
    mongoose.connect(mongostr, () => {
        console.log("MongoDB connection Successfull");
    })
}

module.exports = connectToMongo;
