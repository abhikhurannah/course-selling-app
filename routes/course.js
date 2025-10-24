const {Router} = require('express');
const courseRouter = Router();

courseRouter.post('/purchase', function(req, res) {
    // logic to purchase a course would go here intergrating with payment gateway
    res.json({
        message: "Course purchased successfully"
    });
});

courseRouter.get('/previews', function(req, res) {
    res.json({
        message: "All courses are there "
    });
});

module.exports = { courseRouter };
