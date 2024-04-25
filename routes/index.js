var express = require('express');
const { tokenizeDevice } = require('../middlewares/receiveToken');
const { sendNotification } = require('../controllers/notification');

var router = express.Router();

router.post('/notification/send', tokenizeDevice, sendNotification)

module.exports = router;