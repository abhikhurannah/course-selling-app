const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = 3000;
const {userRouter} = require('./routes/user');
const {courseRouter} = require('./routes/course');
const {adminRouter} = require('./routes/admin');
const mongoose = require('mongoose');


app.use(express.json());
dotenv.config();

// Initialize routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/courses", courseRouter);

// Connect to MongoDB
async function main(){
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Start the server
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    }); 
}
main();

