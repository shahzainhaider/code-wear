import { connectDb } from "@/database/db";
import { Product } from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connectDb();
  try {
    let products = await Product.find();
    products.reverse()

    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal Server Error",
    });
  }
}

export async function POST(request) {
  await connectDb();
  const data = await request.json();

  try {
    for (let i = 0; i < data.length; i++) {
      const product = new Product({
        title: data[i].title,
        slug: data[i].slug,
        desc: data[i].desc,
        category: data[i].category,
        color: data[i].color,
        size: data[i].size,
        avaiableQty: data[i].avaiableQty,
        price: data[i].price,
        img: data[i].img,
      });
      await product.save();
    }

    return NextResponse.json({
      message: data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal Server Error",
    });
  }
}

export async function PUT(request) {
  const data =await request.json();
  await connectDb();
  try {
      for (let i = 0; i < data.length; i++) {
          await Product.findByIdAndUpdate(data[i]._id, data[i]);
          data[i]
    }

    return NextResponse.json({
      message: "Updated",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal Server Error",
    });
  }
}
