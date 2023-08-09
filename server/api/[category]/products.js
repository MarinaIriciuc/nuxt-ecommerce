import prisma from "~/server/data/prisma";

export default eventHandler(async function (event) {

    const {category} = event.context.params
    const includeCategory = {
        include: {
            category: {
                select: {
                    name: true
                }
            }
        }
    }
    let products = null;
    if (category === "all") {
        products = await prisma.product.findMany(includeCategory)
    } else {
        products = await prisma.category.findFirst({
            where: {
                name: category
            }
        }).products(includeCategory)
    }
    return products

})