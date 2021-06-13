import React from 'react'
import {ReactComponent as Logo} from '../../Assets/Owl-HEAD.svg'
import Key from '../../Assets/carbon_password.svg' 
import style from './recoveryPassword.module.css'

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
                    <h1 className={style.title}>Recuperar senha</h1>
                    <img src={Key} alt="Foto de uma chave"/>
                    <p className={style.info}>Ao clicar em enviar, você receberá um email de confirmação para alterar sua senha.</p>
                    <form className={style.form}>
                        <label>Email:</label>
                        <input/>
                        <button className={style.submit} type="submit"><p>Enviar</p></button>
                    </form>
                </div>
            </section>
            
        </>
    )
}
