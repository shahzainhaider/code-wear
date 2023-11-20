import mongoose from "mongoose";

const config={
    isconnected:0
}

export async function connectDb(){
    if(config.isconnected){
        console.log(1)
        return
        
    }
    try {
        const {connection} =await mongoose.connect(process.env.DB_URL);
        config.isconnected=1
        console.log('db connected')

    } catch (error) {
        console.log(error)
        console.log('db not conneceted')
        
    }
}