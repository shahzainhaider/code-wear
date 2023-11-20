import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true}
},{timestamps:true})

export const User = mongoose.models.users || mongoose.model('users',userSchema)