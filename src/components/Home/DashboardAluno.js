import React from 'react'
import style from './dashboardAluno.module.css'
import Header from '../Admin/HeaderAdmin'
import { ReactComponent as Perfil } from '../../Assets/EditarPerfil.svg'
import { ReactComponent as Horarios } from '../../Assets/Horários.svg'
import { ReactComponent as Boletim } from '../../Assets/Boletim.svg'
import { ReactComponent as Calendario } from '../../Assets/Calendário.svg'
import { ReactComponent as Matriz } from '../../Assets/Matriz.svg'
import { ReactComponent as Solicitar } from '../../Assets/Solicitar.svg'
import { ReactComponent as Senha } from '../../Assets/EditarSenha.svg'
import { ReactComponent as FAQ } from '../../Assets/FAQ.svg'
import Photo from '../../Assets/perfil.jpg'
import { Link } from 'react-router-dom'

export default function DashboardAluno() {

    const [data, setData] = React.useState([
        {disc:"Estrutura de dados II", pro: "Otílio Paulo"},
        {disc:"Banco de dados II", pro: "Thiago Elias"},
        {disc:"Engenharia de Software II", pro: "Hélcio de Abreu"},
        {disc:"Sistemas Operacionais", pro: "Prof. Ricardo Martins"},
        {disc:"Programação para Internet I", pro: "Ely Miranda"},
        {disc:"Projeto Integrador", pro: "Ely Miranda"},
    ])

    return (
        <>
            <Header/>
            <section className={style.ContainerMain} >
                <div className={style.ContainerContent}>
                    <div className={style.ContainerInfo}>
                        <div className={style.InfoPhoto}>
                            <img src={Photo} alt="Foto de perfil do aluno" width="128px" />
                        </div>
                        <div className={style.Info}>
                            <h1>Olá, Cícero!</h1>
                            <div className={style.InfoBottom}>
                                <h3>Tec. Análise e Desenvolvimento de Sistemas</h3>
                                <h3>Instituto Federal de Educação, Ciência e Tecnologia do Piauí</h3>
                            </div>
                        </div>
                    </div>
                    <div className={style.ContainerActions}>
                        <div className={style.Actions}>
                            <Perfil/>
                            <p>Editar Perfil</p>
                        </div>
                        <div className={style.Actions}>
                            <Horarios/>
                            <p>Horários</p>
                        </div>
                        <div className={style.Actions}>
                            <Boletim/>
                            <p>Boletim</p>
                        </div>
                        <div className={style.Actions}>
                            <Calendario/>
                            <p>Calendário</p>
                        </div>
                        <div className={style.Actions}>
                            <Matriz/>
                            <p>Matriz Curricular</p>
                        </div>
                        <Link to="/student/documents" className={style.Actions}>
                            <Solicitar/>
                            <p>Solicitação de Documentos</p>
                        </Link>
                        <div className={style.Actions}>
                            <Senha/>
                            <p>Alteração de Senha</p>
                        </div>
                        <div className={style.Actions}>
                            <FAQ/>
                            <p>Instruções do Sistema</p>
                        </div>
                    </div>
                </div>
                <div className={style.ContainerContentAside}>
                    <h1>Disciplinas</h1>
                    {data && data.map(item => (
                        <div className={style.AsideContent}>
                            <h2>{item.disc}</h2>
                            <h4>Prof. {item.pro}</h4>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
