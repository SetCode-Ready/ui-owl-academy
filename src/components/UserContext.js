import React from 'react'
import { toast } from 'react-toastify'
import api from '../config/api'

export const UserContext = React.createContext()

export function UserStorage({children}){
    const [user, setUser] = React.useState()
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
            return response
        } catch (error) {
            toast.error(error)
        } finally{
            setLoding(false)
        }
    }

    function userLogout(){
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
    }   

    function isAuth(){
        const storage = JSON.parse(window.localStorage.getItem('user'))
        
        if(storage){
            return true
        } else {
            return false
        }
    }

    React.useEffect(() => {
        const storage = JSON.parse(window.localStorage.getItem('user'))

        if(storage){
            setUser(storage)
        }

    }, [])

    return(
        <UserContext.Provider value={{userLogin, userLogout, isAuth, user, loading}}>
            {children}
        </UserContext.Provider>
    )
}

export const User = () => React.useContext(UserContext)