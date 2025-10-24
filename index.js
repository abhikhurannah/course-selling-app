const express = require('express');
const app = express();
const port = 3000;
const {userRouter} = require('./routes/user');
const {courseRouter} = require('./routes/course');
const {adminRouter} = require('./routes/admin');
const mongoose = require('mongoose');


app.use(express.json());

// Initialize routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/courses", courseRouter);

// Connect to MongoDB
async function main(){
    await mongoose.connect("mongodb+srv://ak8578227:mongo1234@cluster0.9gtmn48.mongodb.net/courseSellingApp")
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    }); 
}
main();

