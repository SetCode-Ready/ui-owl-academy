import React from 'react'
import Header from './Header'
import style from './home.module.css'
import {ReactComponent as Computer} from '../../Assets/computer.svg'
import LogoHome from '../../Assets/Owl-HEADLogo-Home.png'

export default function Home() {
    return (
        <>
            <Header/>
            <section className={style.ContainerMain} >
                <img src={LogoHome} />
                <Computer/>
            </section>
        </>
    )
}
