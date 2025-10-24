const express = require('express');
const app = express();
const port = 3000;
const {userRouter} = require('./routes/user');
const {courseRouter} = require('./routes/course');

app.use(express.json());

// Initialize routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/courses", courseRouter);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});