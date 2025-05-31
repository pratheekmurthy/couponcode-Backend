const express = require('express')
const router = express.Router()
const couponController = require('../app/controllers/couponsController')
const usedCouponController = require('../app/controllers/usedCouponController')



router.post('/coupon/createCoupon',couponController.createCoupon)
router.get('/coupon/getAllCoupons',couponController.list)
router.post('/coupon/useCoupon',usedCouponController.create)
router.get('/coupon/getAllusedCoupons',usedCouponController.list)
router.post('/coupon/checkDiscount',couponController.checkDiscount)


router.get('/',(req,res)=>{
    res.json("default values")
})


module.exports = router