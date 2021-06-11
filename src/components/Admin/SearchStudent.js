import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import loadingIMG from '../../Assets/loading.svg'
import { Link } from 'react-router-dom';
import style from './searchStudent.module.css'
import api from '../../config/api';
import { toast } from 'react-toastify';

export default function SearchStudent() {
    const [content, setContent] = React.useState();
    const [loading, setLoading] = React.useState(true)
    const [search, setSearch] = React.useState('')

    async function populateForm(){
        try {
            const response = await api.get('/studant/')
            console.log(response)
            if(response.status === 200) setContent(response.data)
        } catch (error) {
            toast.error("Serviço temporariamente indisponivel")
            setContent(null)
        } finally{
            setLoading(false)
        }
        
    }

    React.useEffect(() => {
        
        populateForm()

    }, [])

    return (
        <>
            <HeaderAdmin/>
            <section className={style.ContainerMain} >
                <div className={style.ContainerContent}>
                    <div className={style.ContentHeader} >
                        <h2>Buscar Alunos</h2>
                        <input value={search} onChange={({target}) => setSearch(target.value)}  type='text' placeholder="Digite o codigo do aluno"/>
                    </div>
                    <div className={loading === true ? style.ContentLoading : style.ContentBody}>
                        <img src={loadingIMG} alt="loading" />
                        {content && content.map(item => {
                            return(
                                <Link to={`/search-student/${item.id}`} key={item.id} className={style.Class}>
                                    <p>{item.name}</p>
                                    <p>{item.cpf}</p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
