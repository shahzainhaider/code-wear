import mongoose, { Schema } from 'mongoose'

const orderSchema = new Schema({
    userId:{type:String,required:true},
    products:[{
        productId:{type:String},
        quantity:{type:Number,default:1}
    }],
    address:{type:String,required:true},    
    amount:{type:Number,required:true},    
    status:{type:String,required:true,default:'pending'}    

},{timestamps:true})

export const Order = mongoose.models.orders || mongoose.model('orders',orderSchema)