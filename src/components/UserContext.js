import React from 'react'
import { toast } from 'react-toastify'
import api from '../config/api'

export const UserContext = React.createContext()

export function UserStorage({children}){
    const [loading, setLoding] = React.useState()
    
    async function userLogin(email, password, ar){
        try {
            setLoding(true)
            const response = await api.post('/signin',{
                email,
                password,
                account_role: ar
            })
            window.localStorage.setItem('token', JSON.stringify(response.data.token))
            window.localStorage.setItem('user', JSON.stringify(response.data.user))
            console.log(response)
            return response
        } catch (error) {
            console.log(error.message)
        } finally{
            setLoding(false)
        }
    }

    function userLogout(){
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
    }   

    function isAuth(account){
        const storage = JSON.parse(window.localStorage.getItem('user'))
        
        if(!storage || storage.account_role.id !== account){
            return false
        } else {
            return true
        }
    }

    function getUser(){
        const storage = JSON.parse(window.localStorage.getItem('user'))
        
        return storage
    }


    return(
        <UserContext.Provider value={{userLogin, userLogout, isAuth, getUser, loading}}>
            {children}
        </UserContext.Provider>
    )
}

export const User = () => React.useContext(UserContext)