const UsedCoupon = require('../models/usedCouponSchema')
const usedCouponController ={}

// couponID : {type :String},
//     coupon_value_used : {type: Number},
//     user_Used : {type: String},
//     coupon_usage_details : {type :Object},
usedCouponController.create =async (request,response)=>{
    try{
        
        const usedCouponsReceiveddetails = request.body
        
        let usedcoupon = {}

        usedcoupon.couponID = usedCouponsReceiveddetails.couponID
        // usedcoupon.user_Used=usedCouponsReceiveddetails.user_Used
        // usedcoupon.coupon_usage_details = {
        //     cartValue : usedCouponsReceiveddetails.cartValue,
        //     discountValue : usedCouponsReceiveddetails.discountValue
        // }

        
        let createdusedCoupon = await UsedCoupon.create({couponID : "1"})

        response.send({msg: "Successfull ",data: createdusedCoupon})
    }catch(e){
        response.send({msg: "Unsuccessful", err: e});

    }
}

usedCouponController.list =async (request,response)=>{
    try{
        let allCouponse= await usedCoupon.find({})
        response.send({msg: "Successfull ",data: allCouponse})
    }catch(e){
        response.send({msg: "Unsuccessful", err: e});

    }
}

module.exports = usedCouponController