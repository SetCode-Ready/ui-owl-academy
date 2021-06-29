import React from 'react'
import style from './HeaderTeacher.module.css'
import perfil from '../../Assets/perfil.jpg'
import {ReactComponent as Logo} from '../../Assets/Owl-HEAD.svg'
import {FiBell} from 'react-icons/fi'
import {FiLogOut} from 'react-icons/fi'
import {IconContext} from 'react-icons'
import {Link} from 'react-router-dom'
import { User } from '../UserContext'

export default function HeaderTeacher() {

    const {getUser} = User()

    const [user, setUser] = React.useState()

    React.useEffect(() => {
        setUser(getUser())
    }, [getUser])

    function handleLogout(){
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
    }

    return (
        <header className={style.ContainerHeaderBG}>

            <section className={style.ContainerHeaderAdm}>

                <Link to="/teacher/dashboard" className={style.LogoHeaderAdm}>
                    <Logo/>
                </Link>

                <div className={style.ContainerUserAdm}>

                    <ul>
                        <li>
                            <a href="/teacher/dashboard" className={style.iconAdm}>
                                <IconContext.Provider value={{color: 'white', size: '1.5rem', style:{flexGrow: 2}}}>
                                    <FiBell/>
                                </IconContext.Provider>
                            </a>
                        </li>

                            
                        <li>
                            <a href="/teacher/dashboard">
                                <div className={style.ContainerLoginAdm}>
                                    <img src={perfil} alt="Minha Figura"/>
                                    <p>{user && user.name}</p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <Link onClick={handleLogout}to="/" className={style.iconAdm}>
                                <IconContext.Provider value={{color: 'white', size: '1.5rem', style:{flexGrow: 1}}}>
                                    <FiLogOut/>
                                </IconContext.Provider>
                            </Link>
                        </li>
                    </ul>
                    
                </div>

            </section>

        </header>
    )
}
