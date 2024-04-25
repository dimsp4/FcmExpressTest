const { admin, db } = require('../config/admin')

const tokenizeDevice = (req, res, next) => {
    try {
        const { deviceToken } = req.body
        
        if (!deviceToken) return res.status(400).json({ message: "Device token lu gaada" })

        const docRef = db.collection('FcmData').doc('deviceTokens')
    
        docRef.get().then(async docs => {

            const isExist = docs.data().tokens.includes(deviceToken)
    
            if (isExist) {
                next()
            } else {
                await docRef.update({
                    tokens: admin.firestore.FieldValue.arrayUnion(deviceToken)
                })
                next()
            }
        })
    } catch (error) {
        return res.status(500).json({status: 500, message: error.message})
    }
}

module.exports = { tokenizeDevice }