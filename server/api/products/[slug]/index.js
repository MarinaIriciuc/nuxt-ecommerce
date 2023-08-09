import prisma from "~/server/data/prisma";

export default eventHandler(async function (event){
    // parametrul dinamic
    const {slug} = event.context.params
    return prisma.product.findFirst({
        where: {
            slug: slug
        }
    })
})