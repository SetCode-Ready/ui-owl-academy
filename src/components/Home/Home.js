import React from 'react'
import Header from './Header'
import style from './home.module.css'
import LogoHome from '../../Assets/Owl-HEADLogo-Home.png'
import Logo from '../../Assets/computer.svg'

export default function Home() {
    return (
        <>
            <Header/>
            <section className={style.ContainerMain}>
                <div className={style.ContainerImgs}>
                    <div className={style.LogoPrincipal}>
                        <img src={LogoHome} alt="Owl Academy - Logo"/>
                    </div>
                    <div className={style.Computer}>
                        <img src={Logo} alt="Owl Academy - Logo Maior"/>
                    </div>
                </div>
            </section>
        </>
    )
}
