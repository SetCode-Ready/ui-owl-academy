import React from 'react'
import {ReactComponent as Logo} from '../../Assets/Owl-HEAD.svg'
import CadasPro from '../../Assets/CadastrarProfessor.svg'
import CadasEst from '../../Assets/CadastrarEstudante.svg'
import style from './switchLogin.module.css'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <>
            <header className={style.ContainerHeaderBG}>
                <section className={style.ContainerHeader}>
                    <Link to="/" className={style.LogoHeader}>
                        <Logo/>
                    </Link>
                </section>
            </header>

            <section className={style.Content} >
                <ul>
                    <h1>Entrar como:</h1>
                    <li className={style.Content}>
                        <Link to="/login/student">
                            <picture>
                                <img src={CadasEst} alt={"Aluno"}/>
                            </picture>
                            <p>Estudante</p>
                        </Link>
                    </li>
                    <li className={style.Content}>
                        <Link to="/login/teacher">
                            <picture>
                                <img src={CadasPro} alt={"Professor"}/>
                            </picture>
                            <p>Professor</p>
                        </Link>
                    </li>
                </ul>
            </section>
        </>
    )
}
