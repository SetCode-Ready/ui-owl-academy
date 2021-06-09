import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import style from './dashboardAdmin.module.css'
import{ReactComponent as CadasPro} from '../../Assets/CadastrarProfessor.svg'
import{ReactComponent as CadasEst} from '../../Assets/CadastrarEstudante.svg'
import{ReactComponent as ContTur} from '../../Assets/ControledeTurma.svg'
import{ReactComponent as Prof} from '../../Assets/Professores.svg'
import{ReactComponent as Aluno} from '../../Assets/Alunos.svg'
import{ReactComponent as Class} from '../../Assets/Classroom.svg'

export default function DashboardAdmin() {
    return (
        <>
            <HeaderAdmin/>
            <section className={style.ContainerMain}>
                <div className={style.ContainerContent}>
                    <a className={style.Content} href="/add-teacher">
                        <CadasPro/>
                        <p>Cadastrar</p>
                        <span>Professor</span>
                    </a>
                
                    <a className={style.Content} href="/add-student">
                        <CadasEst/>
                        <p>Cadastrar</p>
                        <span>Alunos</span>
                    </a>
                    
                    <a className={style.Content}  href="/add-class">
                        <ContTur/>
                        <p>Cadastrar</p>
                        <span>Turmas</span>
                    </a>

                    <a className={style.Content} href="/search-teacher">
                        <Prof/>
                        <p>Listar</p>
                        <span>Professor</span>
                    </a>
                    
                    <a className={style.Content} href="/search-student">
                        <Aluno/>
                        <p>Listar</p>
                        <span>Alunos</span>
                    </a>

                    <a className={style.Content} href="/search-class">
                        <Class/>
                        <p>Listar</p>
                        <span>Turmas</span>
                    </a>
                    
                </div>
            </section>
        </>
    )
}
