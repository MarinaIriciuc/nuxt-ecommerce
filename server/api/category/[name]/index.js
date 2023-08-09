import prisma from "~/server/data/prisma";

export default eventHandler(async function (event) {
    const { name } = event.context.params


    return prisma.category.findFirst({
        where: {
            name: name
        }
    })
})