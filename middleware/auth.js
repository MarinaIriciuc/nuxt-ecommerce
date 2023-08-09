export default defineNuxtRouteMiddleware(async function (){
    const {getSession} = useAuth();
    const session = await getSession();
    if (! session.user){
        return navigateTo('/login')
    }
})