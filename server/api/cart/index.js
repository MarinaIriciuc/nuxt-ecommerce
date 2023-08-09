import prisma from "~/server/data/prisma";
import {getServerSession} from "#auth";


export default eventHandler(async function (event) {

    const session = await getServerSession(event)

    const cartItems = await prisma
        .user
        .findFirst({
            where: {
                id: session.user.id
            }
        })
        .cart()
        .cartitem({
            select: {
                id: true,
                quantity: true,
                product: {
                    include: {
                        category: true
                    }
                }
            },
        })

    const cartTotal = cartItems.reduce(function(acc, item) {
        return acc + (item.quantity * item.product.price)
    }, 0)

    return {
        success: true,
        items: cartItems,
        total: cartTotal
    }
})