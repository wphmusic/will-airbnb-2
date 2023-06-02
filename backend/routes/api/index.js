const router = require('express').Router();

module.exports = router;

// backend/routes/index.js
// ...
const apiRouter = require('./api');

router.use('/api', apiRouter);
// ...
