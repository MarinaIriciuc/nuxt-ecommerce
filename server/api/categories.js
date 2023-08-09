import prisma from "~/server/data/prisma";

export default async function defineEventHandler() {

    return prisma.category.findMany();

}