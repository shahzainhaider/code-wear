import { connectDb } from "@/database/db";
import { NextResponse } from "next/server";

export async function GET(request){
   await connectDb()
    try {
        return NextResponse.json([111,222,444,666,999])
        
    } catch (error) {
        console.log(error)
    }
}