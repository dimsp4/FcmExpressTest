const { admin, db } = require('../config/admin')

const registrationToken = 'FCM TOKEN of target device'


const options = {
    priority: "high"
}

const sendNotification = (req, res, next) => {
    const { deviceToken, title, body,  } = req.body
    console.log('send');
    admin.messaging().sendToDevice(deviceToken, {
        notification: {
            title: "FCM Mantap",
            body: "Notification has been recieved",
            content_available: "true",
            image: "https://i.ytimg.com/vi/iosNuIdQoy8/maxresdefault.jpg"
        }
    }, options)
        .then(function (response) {
            res.status(200).json({message: 'berhasil ngirim!'})
        })
        .catch(function (error) {
            res.status(500).json({status: 500, message: error})
        });
}

module.exports = { sendNotification }
