const Coupon = require('../models/couponSchema')
const couponController ={}



couponController.createCoupon =async (request,response)=>{
    try{
        const couponDetailsReceived = request.body
        const coupon = new Coupon()
        coupon.couponName = couponDetailsReceived.CouponName
        coupon.typeOfDiscount = couponDetailsReceived.typeOfDiscount
        coupon.startDate= couponDetailsReceived.startDate
        coupon.endDate= couponDetailsReceived.endDate
        coupon.max_Discount= couponDetailsReceived.max_Discount
        coupon.flat_Discount_Amount= couponDetailsReceived.flat_Discount_Amount
        coupon.percentage= couponDetailsReceived.percentage
        coupon.coupon_created_by= couponDetailsReceived.coupon_created_by
        coupon.min_Cart_Value= couponDetailsReceived.min_Cart_Value

        let createdCoupon = await coupon.save()
        response.send({msg: "Successfull ",data: createdCoupon})
    }catch(e){
        response.send({msg: "Unsuccessful", err: e});

    }
}

couponController.list =async (request,response)=>{
    try{
        let allCouponse= await Coupon.find({})
        response.send({msg: "Successfull ",data: allCouponse})
    }catch(e){
        response.send({msg: "Unsuccessful", err: e});

    }
}

couponController.checkDiscount =async (request,response)=>{
    try{
        const discountRequestedDetails = request.body
        let couponDiscountAmount = 0

        let coupon= await Coupon.find({couponName : discountRequestedDetails.couponID})
        //console.log(coupon)

        if(coupon.length > 0){
            if(coupon[0].typeOfDiscount == 'flat' && discountRequestedDetails.cartValue >= coupon[0].min_Cart_Value ){
                let calculation  = discountRequestedDetails.cartValue - coupon[0].flat_Discount_Amount
                 if(calculation > coupon[0].max_Discount){
                     couponDiscountAmount = coupon[0].max_Discount
                 }else {
                     couponDiscountAmount = calculation
                 }
                
             }else if(coupon[0].typeOfDiscount == 'percentage'&& discountRequestedDetails.cartValue >= coupon[0].min_Cart_Value){
                 console.log(" i am here")
                 let calculation = discountRequestedDetails.cartValue * (100 - coupon[0].percentage) /100
                 if(calculation > coupon[0].max_Discount){
                     couponDiscountAmount = coupon[0].max_Discount
                 }else {
                     couponDiscountAmount = calculation
                 }
             }
     
             
             response.send({msg: "Successfull ",data: couponDiscountAmount})
        }else {
            response.send({msg: "Please enter valid Coupon"})
        }
        
    }catch(e){
        response.send({msg: "Unsuccessful", err: e});

    }
}

module.exports = couponController