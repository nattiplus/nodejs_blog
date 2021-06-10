const mongoose = require('mongoose');

// Connect Mongo DB
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/Blog_SangPC_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('Connect Succesfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}
module.exports = { connect };
