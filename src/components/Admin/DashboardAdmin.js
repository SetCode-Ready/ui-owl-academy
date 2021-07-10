import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import style from './dashboardAdmin.module.css'
import{ReactComponent as CadasPro} from '../../Assets/CadastrarProfessor.svg'
import{ReactComponent as CadasEst} from '../../Assets/CadastrarEstudante.svg'
import{ReactComponent as ContTur} from '../../Assets/ControledeTurma.svg'
import{ReactComponent as Prof} from '../../Assets/Professores.svg'
import{ReactComponent as Aluno} from '../../Assets/Alunos.svg'
import{ReactComponent as Class} from '../../Assets/Classroom.svg'
import { Link } from 'react-router-dom'

export default function DashboardAdmin() {
    return (
        <>
            <HeaderAdmin/>
            <section className={style.ContainerMain}>
                <div className={style.ContainerContent}>
                    <Link className={style.Content} to="/add-teacher">
                        <CadasPro/>
                        <p>Cadastrar</p>
                        <span>Professor</span>
                    </Link>
                
                    <Link className={style.Content} to="/add-student">
                        <CadasEst/>
                        <p>Cadastrar</p>
                        <span>Alunos</span>
                    </Link>
                    
                    <Link className={style.Content}  to="/add-class">
                        <ContTur/>
                        <p>Cadastrar</p>
                        <span>Turmas</span>
                    </Link>

                    <Link className={style.Content} to="/search-teacher">
                        <Prof/>
                        <p>Listar</p>
                        <span>Professor</span>
                    </Link>
                    
                    <Link className={style.Content} to="/search-student">
                        <Aluno/>
                        <p>Listar</p>
                        <span>Alunos</span>
                    </Link>

                    <Link className={style.Content} to="/search-class">
                        <Class/>
                        <p>Listar</p>
                        <span>Turmas</span>
                    </Link>
                    
                </div>
            </section>
        </>
    )
}
