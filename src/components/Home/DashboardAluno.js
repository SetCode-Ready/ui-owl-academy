import React from 'react'
import style from './dashboardAluno.module.css'
import Header from './HeaderAluno'
import { ReactComponent as Perfil } from '../../Assets/EditarPerfil.svg'
import { ReactComponent as Horarios } from '../../Assets/Horários.svg'
import { ReactComponent as Boletim } from '../../Assets/Boletim.svg'
import { ReactComponent as Calendario } from '../../Assets/Calendário.svg'
import { ReactComponent as Matriz } from '../../Assets/Matriz.svg'
import { ReactComponent as Solicitar } from '../../Assets/Solicitar.svg'
import { ReactComponent as Senha } from '../../Assets/EditarSenha.svg'
import { ReactComponent as FAQ } from '../../Assets/FAQ.svg'
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import perfil from '../../Assets/perfil.jpg'
import { User } from '../UserContext'

export default function DashboardAluno() {
    
    const history = useHistory()
    const {getUser, isAuth} = User()

    const [user, setUser] = React.useState()

    const [disciplinas, setDisciplinas] = React.useState([
        {id:1, disc:"Estrutura de dados II", pro: "Otílio Paulo"},
        {id:2, disc:"Banco de dados II", pro: "Thiago Elias"},
        {id:3, disc:"Engenharia de Software II", pro: "Hélcio de Abreu"},
        {id:4, disc:"Sistemas Operacionais", pro: "Prof. Ricardo Martins"},
        {id:5, disc:"Programação para Internet I", pro: "Ely Miranda"},
        {id:6, disc:"Projeto Integrador", pro: "Ely Miranda"},
    ])
    

    React.useEffect(() => {
        setUser(getUser())
        const logged = isAuth(3)
    
        if(!logged){
            history.push('/')
        }
        
    }, [getUser, history, isAuth])
    
    return (
        <>
            <Header/>
            <section className={style.ContainerMain} >
                <div className={style.ContainerContent}>
                    <div className={style.ContainerInfo}>
                        <div className={style.InfoPhoto}>
                            <img src={perfil} alt="Foto de perfil do aluno" width="128px" />
                        </div>
                        <div className={style.Info}>
                            <h1>{user && `Olá, ${user.name}!`}</h1>
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
                    {disciplinas&& disciplinas.map(item => (
                        <div key={disciplinas.id} className={style.AsideContent}>
                            <h2>{item.disc}</h2>
                            <h4>Prof. {item.pro}</h4>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
