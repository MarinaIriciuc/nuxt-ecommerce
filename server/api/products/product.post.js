import prisma from "~/server/data/prisma";
import {ProductSchema} from "~/schemas/ProductSchema";

export default async function defineEventHandler(event) {
    const body = await readBody(event);
    const result = ProductSchema.safeParse(body)

    if(!result.success) {
        const errors = {}
        result.error.issues.forEach(function (issue){
            errors[issue.path[0]] = issue.message
        })
        return {
            success: false,
            errors: errors
        }
    }

    const product = await prisma.product.create({
        data: body
    })
    return {
        success: true,
        data: product
    };
}