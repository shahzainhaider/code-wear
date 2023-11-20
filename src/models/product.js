import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema({
    title:{type:String,required:true},
    slug:{type:String,required:true,unique:true},
    desc:{type:String,required:true},
    img:{type:String,required:true},
    category:{type:String,required:true},
    size:{type:String,required:true},
    color:{type:String,required:true},
    price:{type:Number,required:true},
    avaiableQty:{type:Number,required:true}
},{timestamps:true})

export const Product = mongoose.models.products || mongoose.model('products',productSchema)