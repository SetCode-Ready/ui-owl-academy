import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import style from './dashboardAdmin.module.css'
import{ReactComponent as CadasPro} from '../../Assets/CadastrarProfessor.svg'
import{ReactComponent as CadasEst} from '../../Assets/CadastrarEstudante.svg'
import{ReactComponent as ContTur} from '../../Assets/ControledeTurma.svg'
import{ReactComponent as Prof} from '../../Assets/Professores.svg'
import{ReactComponent as Aluno} from '../../Assets/Alunos.svg'
import{ReactComponent as Class} from '../../Assets/Classroom.svg'

export default function DashboarAdmin() {
    return (
        <>
            <HeaderAdmin/>
            <section className={style.ContainerMain}>
                <div className={style.ContainerContent}>
                    <div className={style.Content}>
                        <CadasPro/>
                        <p>Cadastrar</p>
                        <span>Professor</span>
                    </div>
                    <div className={style.Content}>
                        <CadasEst/>
                        <p>Cadastrar</p>
                        <span>Alunos</span>
                    </div>
                    <div className={style.Content}>
                        <ContTur/>
                        <p>Cadastrar</p>
                        <span>Turmas</span>
                    </div>
                    <div className={style.Content}>
                        <Prof/>
                        <p>Listar</p>
                        <span>Professor</span>
                    </div>
                    <div className={style.Content}>
                        <Aluno/>
                        <p>Listar</p>
                        <span>Alunos</span>
                    </div>
                    <div className={style.Content}>
                        <Class/>
                        <p>Listar</p>
                        <span>Turmas</span>
                    </div>
                </div>
            </section>
        </>
    )
}
