const express = require('express')
const router = express.Router()
const couponController = require('../app/controllers/couponsController')
const usedCouponController = require('../app/controllers/usedCouponController')



router.post('/api/coupon/createCoupon',couponController.createCoupon)
router.get('/api/coupon/getAllCoupons',couponController.list)
router.post('/api/coupon/useCoupon',usedCouponController.create)
router.get('/api/coupon/getAllusedCoupons',usedCouponController.list)
router.post('/api/coupon/checkDiscount',couponController.checkDiscount)



router.get('/api/',(req,res)=>{
    res.json("default values")
})


module.exports = router