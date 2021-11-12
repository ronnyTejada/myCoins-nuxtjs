
export default async function redirect({app, redirect, req, res, route}){

        //let user =  true

        let user = await app.$cookies.get('user')

        console.log(user)
        if(!user){
            redirect('/')
            
        }else if(route.path === '/' && user){
            redirect('/coins')
            
        }
    
    
    return;
}