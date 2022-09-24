const router = require("express")();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken)


router.post( '/', ( req, res, next ) => {
    try {
        const { phoneNumber, message } = req.body.phoneNumber;
        const OTP = Math.floor(1000 + Math.random() * 9000)
            .create({
                to: phoneNumber,
                from: '+18647341627',
                body: `${message}.
                 Hi. Your OTP is : ${OTP}`,
            })
        return res.status(200).json({ message: "success",OTP:OTP})
    }
    catch (error) {
        return res.status(401).json(error.message)
    }
})



module.exports = router;