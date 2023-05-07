const mongoose = require('mongoose');
const mongostr = "mongodb+srv://gauravshresth2000:HFFgcpWDYP1p3uuH@cluster0.1iqgzmn.mongodb.net/vct?retryWrites=true&w=majority";
// const mongostr = "mongodb+srv://imshresth:imshresth@cluster0.6c0eb.mongodb.net/TAdS_VCT?retryWrites=true&w=majority";
// const mongostr = "mongodb://localhost:27017/vct";

const connectToMongo = () => {
    mongoose.connect(mongostr, () => {
        console.log("MongoDB connection Successfull");
    })
}

module.exports = connectToMongo;

// mongodb+srv://gauravshresth2000:HFFgcpWDYP1p3uuH@cluster0.1iqgzmn.mongodb.net/vct?retryWrites=true&w=majority
