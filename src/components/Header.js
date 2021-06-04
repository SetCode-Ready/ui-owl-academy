import React from 'react'
import style from './header.module.css'
import {ReactComponent as Logo} from '../Assets/Owl-HEAD.svg'

export default function Header() {
    return (
        <header className={style.ContainerHeader}>
            <Logo/>
            <nav className={style.ContainerNav}>
                <a href="/" className={style.Button}>Home</a>
                <a href="/" className={style.Button}>Sobre</a>
                <a href="/" className={style.Button}>Login</a>
            </nav>
        </header>
    )
}
