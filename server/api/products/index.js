import prisma from "~/server/data/prisma";

export default eventHandler(function (event) {

    const query = getQuery(event)
    const params = {
        include: {
            category: {
                select: {
                    name: true
                }
            }
        }
    }

    if (query.limit) {
        params.take = Number(query.limit)
    }

    return prisma.product.findMany(params);
})