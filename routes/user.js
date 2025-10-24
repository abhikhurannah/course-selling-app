const { Router } = require('express');
const userRouter = Router();
const { UserModel, PurchaseModel } = require('../db');

userRouter.post('/signup', function(req, res) {
    res.json({
        message: "User signed up successfully"
    });
});

userRouter.post('/signin', function(req, res) {
    res.json({
        message: "User signed in successfully"
    });
});

userRouter.get('/purchases', function(req, res) {
    res.json({
        message: "User purchases retrieved successfully"
    });
});

module.exports = { userRouter };
