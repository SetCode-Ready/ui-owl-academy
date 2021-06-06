import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import style from './searchClass.module.css'

export default function SearchTeacher() {

    const [content, setContent] = React.useState([{n: 'a', d:'Biologia'}, {n: 'a', d:'Biologia'}, {n: 'a', d:'Biologia'}, {n: 'a', d:'Biologia'}, {n: 'a', d:'Biologia'}, {n: 'a', d:'Biologia'}]);

    return (
        <>
            <HeaderAdmin/>
            <section className={style.ContainerMain} >
                <div className={style.ContainerContent}>
                    <div className={style.ContentHeader} >
                        <h2>Buscar Turmas</h2>
                        <input type='text' placeholder="Digite o nome da turma"/>
                    </div>
                    <div className={style.ContentBody}>
                        {content && content.map(iten => {
                            return(
                                <div className={style.Class} >
                                    <p>{iten.n}</p>
                                    <p>{iten.d}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
