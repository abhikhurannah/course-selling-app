const {Router} = require('express');
const adminRouter = Router();
const { AdminModel } = require('../db');

adminRouter.post('/signin', function(req, res) {
    // logic to sign in an admin would go here
    res.json({
        message: "Admin signed in successfully"
    });
});
adminRouter.post('/signup', function(req, res) {
    // logic to sign up an admin would go here
    res.json({
        message: "Admin signed up successfully"
    });
});

adminRouter.post('/course', function(req, res) {
    // logic to create a course would go here
    res.json({
        message: "Course created successfully"
    });
});
adminRouter.put('/course/', function(req, res) {
    // logic to update a course would go here
    res.json({
        message: "Course updated successfully"
    });
});

adminRouter.get('/all-courses', function(req, res) {
    // logic to get all courses would go here
    res.json({
        message: "All courses retrieved successfully"
    });
});
module.exports = { adminRouter };