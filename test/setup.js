console.log("setup.js top")

const mongoose = require('mongoose');
require('dotenv').config();

beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI_TEST);
});

afterAll(async () => {
    await mongoose.disconnect();
});


console.log("setup.js bottom")
