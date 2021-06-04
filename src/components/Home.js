import React from 'react'
import Header from './Header'
import style from './home.module.css'
import Logo from '../Assets/computer.svg'
import LogoHome from '../Assets/Owl-HEADLogo-Home.png'

export default function Home() {
    return (
        <>
            <Header/>
            <section className={style.ContainerMain}>
                <div className={style.ContainerImgs}>
                    <div className={style.LogoPrincipal}>
                        <img src={LogoHome}/>
                    </div>
                    <div className={style.Computer}>
                        <img src={Logo}/>
                    </div>
                </div>
            </section>
        </>
    )
}
