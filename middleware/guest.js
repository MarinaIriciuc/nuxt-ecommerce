
export default defineNuxtRouteMiddleware(async function (to, from) {
    const {getSession} = useAuth();
    const session = await getSession();
    if (session.user){
       return navigateTo('/')
    }
})