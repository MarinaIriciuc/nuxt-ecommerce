import prisma from "~/server/data/prisma";

export default eventHandler(async function (event){

    const { id } = await readBody(event)

    return prisma.cartItem.delete({
        where: {
            id: id
        }
    });


})