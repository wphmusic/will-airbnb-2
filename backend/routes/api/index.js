const router = require('express').Router();

module.exports = router;

// backend/routes/index.js
// ...
const apiRouter = require('./api');

router.use('/api', apiRouter);
// ...

// backend/routes/api/index.js
// ...

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });
  
  // ...
