const { admin, db } = require('../config/admin')

const options = {
    priority: "high"
}

const sendNotification = (req, res, next) => {
    const { deviceToken, title, body } = req.body
    console.log('send');
    admin.messaging().send({
        token: deviceToken,
        notification: {
          title: title || "Ini default titlenya coy.",
          body: body || "Kalo ini mah default body. Kirim payload title dan body custom-mu!"
        },
        android: {
          notification: {
            sound: "default"
          }
        },
      })
        .then(function (response) {
            res.status(200).json({message: 'berhasil ngirim!'})
        })
        .catch(function (error) {
            res.status(500).json({status: 500, message: error})
        });
}

module.exports = { sendNotification }
