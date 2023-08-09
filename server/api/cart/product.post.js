import prisma from "~/server/data/prisma";
import {getServerSession} from '#auth'


export default eventHandler(async function (event) {

    const {productId, quantity} = await readBody(event)

    const session = await getServerSession(event)
    if (!session?.user) {
        return "NU ESTI LOGAT";
    }


    const userCart = await prisma.user.findFirst({
        where: {
            id: session.user.id
        }
    }).cart({
        include: {
            cartitem: true
        }
    })

    const existsInCart = userCart.cartitem.some(function (item) {
        return productId === item.productId
    })

    console.log("Produsul are ID " + productId)


    if (existsInCart) {
        await prisma.cartItem.update({
            where: {
                productId: productId
            },
            data: {
                quantity: {
                    increment: quantity
                }
            }
        })
    } else {
        await prisma.cartItem.create({
            data: {
                cartId: userCart.id,
                productId: productId,
                quantity: quantity
            }
        })
    }

    return "success";


})