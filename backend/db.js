const mongoose = require('mongoose');
require("dotenv").config();

const databaseUrl = process.env.MONGO_URL;

console.log("database url : " , databaseUrl)

mongoose.connect(
  databaseUrl
).then(res => {
    console.log("data base connected successfully")
}).catch(err => {
   console.log("somethings went wrong while making connection") ;
});


const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
})


const AccountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    }
})

const User = mongoose.model('User', UserSchema);
const Account = mongoose.model('Account',AccountSchema);

module.exports = {
    User: User,
    Account: Account
};
