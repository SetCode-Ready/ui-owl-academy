import React from 'react'
import Header from './Header'
import style from './home.module.css'
<<<<<<< HEAD:src/components/Home/Home.js
import {ReactComponent as Computer} from '../../Assets/computer.svg'
import LogoHome from '../../Assets/Owl-HEADLogo-Home.png'
=======
import Logo from '../Assets/computer.svg'
import LogoHome from '../Assets/Owl-HEADLogo-Home.png'
>>>>>>> b8f8be8e636a4eecaacacd2e7bad50d68e72be93:src/components/Home.js

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
