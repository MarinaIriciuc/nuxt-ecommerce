import {NuxtAuthHandler} from '#auth'
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "~/server/data/prisma";

const prismaAdapter = PrismaAdapter(prisma)

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
            // process.env - citeste toate variabilele din environment-ul tau (+ cele din fisierul .env)
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        GoogleProvider.default({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),

        // CredentialsProvider.default({
        //     name: "Credentials",
        //     async authorize(credentials) {
        //         const user = await prisma.user.findFirst({
        //             where: {
        //                 email: credentials.email,
        //                 password: credentials.password
        //             }
        //         })
        //         if (user) {
        //             return user;
        //         }
        //         return null;
        //     }
        // })

    ],
    secret: runtimeConfig.AUTH_SECRET,
    adapter: prismaAdapter,
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async session({session, user}) {

            if (session?.user) {
                session.user.id = user.id
                session.user.isAdmin = user.isAdmin
            }
            return session
        }
    },
    events: {
        async createUser({user}) {
            await prisma.cart.create({
                data: {
                    userId: user.id
                }
            })
        }
    }
})