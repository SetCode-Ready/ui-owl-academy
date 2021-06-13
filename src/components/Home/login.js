import React from 'react'
import {ReactComponent as Logo} from '../../Assets/Owl-HEAD.svg'
import style from './login.module.css'

export default function Home() {
    return (
        <>
            <header className={style.ContainerHeaderBG}>
                <section className={style.ContainerHeader}>
                    <a href="/" className={style.LogoHeader}>
                        <Logo/>
                    </a>
                </section>
            </header>

            <section className={style.containerMain}>
                <div className={style.containerDiv}>
                    <h1 className={style.title}>Fazer Login</h1>
                    <form className={style.form}>
                        <label>Email:</label>
                        <input/>
                        <label>Senha:</label>
                        <input/>
                        <button className={style.submit} type="submit"><p>entrar</p></button>
                    </form>
                </div>
            </section>
            
        </>
    )
}
