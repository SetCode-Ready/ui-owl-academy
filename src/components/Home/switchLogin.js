import React from 'react'
import {ReactComponent as Logo} from '../../Assets/Owl-HEAD.svg'
import CadasPro from '../../Assets/CadastrarProfessor.svg'
import CadasEst from '../../Assets/CadastrarEstudante.svg'
import style from './switchLogin.module.css'

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

            <section className={style.Content} >
                <ul>
                    <h1>Entrar como:</h1>
                    <li className={style.Content}>
                        <a href="/login">
                            <picture>
                                <img src={CadasEst} alt={"Aluno"}/>
                            </picture>
                            <p>Estudante</p>
                        </a>
                    </li>
                    <li className={style.Content}>
                        <a href="/login">
                            <picture>
                                <img src={CadasPro} alt={"Professor"}/>
                            </picture>
                            <p>Professor</p>
                        </a>
                    </li>
                </ul>
            </section>
        </>
    )
}
