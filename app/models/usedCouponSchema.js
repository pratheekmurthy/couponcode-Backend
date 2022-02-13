
const mongoose = require('mongoose')


const Schema = mongoose.Schema

const usedCouponSchema = new Schema({
    couponID : {type :String},
    // user_Used : {type: String},
    // coupon_usage_details : {type :Object},
    createdAt : {
        type : Date,
        default : Date.now
    }

})

const usedCoupon = mongoose.model('usedCoupon', usedCouponSchema)

module.exports = usedCoupon