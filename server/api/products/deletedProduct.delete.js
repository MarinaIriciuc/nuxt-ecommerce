import prisma from "~/server/data/prisma";
import {getServerSession} from "#auth";

export default eventHandler(async function (event) {

    let body = await readBody(event);
    const session = await getServerSession(event)
    console.log(session)
    if (session.user.isAdmin){
        return prisma.product.delete({
            where: {
                id: body
            }
        });
    }

})