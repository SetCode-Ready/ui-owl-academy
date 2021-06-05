import React from 'react'
import style from './header.module.css'
import {ReactComponent as Logo} from '../../Assets/Owl-HEAD.svg'

export default function Header() {
    return (
        <header className={style.ContainerHeaderBG}>
            
            <section className={style.ContainerHeader}>
                <a href="/" className={style.LogoHeader}>
                    <Logo/>
                    </a>
                
                <div>
                    <nav className={style.ContainerNav}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Sobre</a></li>
                        <li><a href="/" className={style.buttonLogin}>Login</a></li>
                    </ul>
                </nav>
                </div>
                
            </section>
            
        </header>
    )
}
