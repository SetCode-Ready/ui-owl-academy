import React from 'react'
import Header from './Header'
import style from './documentRequest.module.css'
import {ReactComponent as Historico} from '../../Assets/historico.svg'
import {ReactComponent as Declaracao} from '../../Assets/declaracao.svg'
import {ReactComponent as Material} from '../../Assets/material.svg'

export default function DocumentRequest() {
    return (
        <>
            <Header/>
            <section className={style.ContainerMain} >
                <h1>Solicitação de documentos</h1>
                <div className={style.ContainerContent}>
                    <div className={style.Content}>
                        <Historico/>
                        <p>Histórico Escolar</p>
                    </div>
                    <div className={style.Content}>
                        <Declaracao/>
                        <p>Declaração de Matricula</p>
                    </div>
                    <a href="download/https://files-owl-academy.s3.amazonaws.com/94315b8004e55e19dd974798070b08d2-Screenshot_20210602_104555.png" download className={style.Content}>
                        <Material/>
                        <p>Material de Aula</p>
                    </a>
                </div>
            </section>
        </>
    )
}
