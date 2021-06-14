import React from 'react'
import { NavLink, useHistory} from 'react-router-dom'
import { toast } from 'react-toastify'
import {ReactComponent as Logo} from '../../Assets/Owl-HEAD.svg'
import style from './login.module.css'

export default function Home() {

    const history = useHistory()

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    function handleSubmit(e){
        e.preventDefault()

        const href = window.location.pathname

        let params = href.split('/')

        console.log(params)

        if(email === 'cicero@email.com' && password === 'admin'){
            if(params[2] === "teacher"){
                history.push("/teacher/dashboard")
            } else {
                history.push("/student/dashboard")
            }
        } else{
            toast.error("Usuário e/ou senha incorretos")
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
                        <button className={style.submit} type="submit"><p>entrar</p></button>
                    </form>
                </div>
            </section>
            
        </>
    )
}
