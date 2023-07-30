

import prisma from "../../../prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";






// post products
export async function postProducts(req:NextRequest,res:NextResponse) {
    const body =await res.json();
    // extract this  productName String
//   price      Float
//   description String
//   keyFeatures String
//   specifications String
//   productDetails String
//   productImages String
//   category String?
//   subCategory String?
//   brand String? from body
   

const {productName,price,description,keyFeatures,specifications,productDetails,productImages,category,subCategory,brand} = body;

    const product = await prisma.product.create({
        data: {
            productName,
            price,
            description,
            keyFeatures,
            specifications,
            productDetails,
            productImages,
            category,
            subCategory,
            brand,
        },
    });
    return NextResponse.json({
        status: "success",
        data: product,
        statusbar: "success",
        message: "Product created successfully",

    })
}