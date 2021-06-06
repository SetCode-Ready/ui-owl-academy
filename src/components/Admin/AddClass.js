import React, { useEffect } from 'react'
import HeaderAdmin from './HeaderAdmin'
import style from './addClass.module.css'

export default function AddClass() {
    return (
        <>
            <HeaderAdmin/>
            <section className={style.containerMain}>
                <div className={style.containerDiv}>
                    
                    
                    <h1 className={style.title}>Cadastrar Turma</h1>

                    <form className={style.form}>
                        <fieldset>
                            <label>Código da turma</label>
                            <input type="text"></input>
                        </fieldset>
                        
                        <fieldset>
                            <label>Status</label>
                            <select>
                                <option value="ativo">Ativo</option>
                                <option value="inativo">Inativo</option>
                            </select>
                        </fieldset>
                        
                        <fieldset>
                            <label>Ensino</label>
                            <select>
                                <option value="fundamental">Fundamental</option>
                                <option value="medio">Médio</option>
                                <option value="superior">Superior</option>
                            </select>
                        </fieldset>

                        <fieldset>
                            <label>Lotação</label>
                            <input type="number"/>
                        </fieldset>
                        
                        <button className={style.submit} type="submit">Cadastrar</button>
                    </form>
                        
                </div>
                
            </section>
        </>
    )
}
