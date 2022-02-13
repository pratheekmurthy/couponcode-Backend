
const mongoose = require('mongoose')


const Schema = mongoose.Schema

const couponSchema = new Schema({
    couponName : {type: String, required: true, index: { unique: true }},
    startDate : {type: Date, required: true},
    endDate : {type: Date, required: true},
    typeOfDiscount : {type :String,required :true},
    max_Discount : {type:Number},
    flat_Discount_Amount :  {type:Number},
    percentage :  {type:Number},
    coupon_created_by : {type :String},
    min_Cart_Value : {type : Number},
    createdAt : {
        type : Date,
        default : Date.now
    }

})

const coupon = mongoose.model('coupon', couponSchema)

module.exports = coupon