import React from 'react'
import style from './header.module.css'
import {ReactComponent as Logo} from '../../Assets/Owl-HEAD.svg'
import {Link} from 'react-router-dom'

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
                        <li><Link to="/switch-login/" className={style.buttonLogin}>Login</Link></li>
                    </ul>
                </nav>
                </div>
                
            </section>
            
        </header>
    )
}
