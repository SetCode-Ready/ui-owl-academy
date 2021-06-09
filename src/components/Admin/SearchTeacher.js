import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import loadingIMG from '../../Assets/loading.svg'
import { Link } from 'react-router-dom';
import style from './searchStudent.module.css'

export default function SearchTeacher() {
    const [content, setContent] = React.useState();
    const [loading, setLoading] = React.useState(true)
    const [search, setSearch] = React.useState('')

    return (
        <>
            <HeaderAdmin/>
            <section className={style.ContainerMain} >
                <div className={style.ContainerContent}>
                    <div className={style.ContentHeader} >
                        <h2>Buscar Professor</h2>
                        <input value={search} onChange={({target}) => setSearch(target.value)}  type='text' placeholder="Digite o codigo do professor"/>
                    </div>
                    <div className={loading === true ? style.ContentLoading : style.ContentBody}>
                        <img src={loadingIMG} alt="loading" />
                        {content && content.map(item => {
                            return(
                                <Link to={`/search-class/${item.id}`} key={item.created_at} className={style.Class}>
                                    <p>{item.class_code}</p>
                                    <p>{item.status}</p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
