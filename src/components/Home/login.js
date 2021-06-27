import React from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { toast } from 'react-toastify'
import style from './login.module.css'
import {UserContext} from '../UserContext.js'
import {ReactComponent as Logo} from '../../Assets/Owl-HEAD.svg'

export default function Home() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const {userLogin, loading} = React.useContext(UserContext)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        const href = window.location.pathname

        const href_split = href.split('/')
        
        let account_role;

        if(href_split[2] === 'student'){
            account_role = 3
        }else {
            account_role = 2
        }
        try {
            if(email.length > 0 && password.length > 0){
                const response = await userLogin(email, password, account_role)
                if(response.status === 200){
                    if(account_role === 3){
                        history.push('/student/dashboard')
                    } else {
                        history.push('/teacher/dashboard')
                    }
                }
            } else {
                throw new Error('Peencha todos os campos!')
            }
        } catch (error) {
            toast.error(error.message)
        }
    }


    return (
        <>
            <header className={style.ContainerHeaderBG}>
                <section className={style.ContainerHeader}>
                    <NavLink to="/" className={style.LogoHeader}>
                        <Logo/>
                    </NavLink>
                </section>
            </header>

            <section className={style.containerMain}>
                <div className={style.containerDiv}>
                    <h1 className={style.title}>Fazer Login</h1>
                    <form className={style.form} onSubmit={handleSubmit}>
                        <label>Email:</label>
                        <input value={email} type="email" onChange={({target}) => setEmail(target.value)} />
                        <label>Senha:</label>
                        <input value={password} type="password" onChange={({target}) => setPassword(target.value)}/>
                        <NavLink to="/recovery-password">Esqueceu sua senha?</NavLink>
                        {loading ? 
                        <button disabled className={style.submit} type="submit"><p>entrar</p></button>
                        :
                        <button className={style.submit} type="submit"><p>entrar</p></button>}
                    </form>
                </div>
            </section>
            
        </>
    )
}
