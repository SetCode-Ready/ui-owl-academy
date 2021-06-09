import React from 'react'
import {useHistory, useParams} from 'react-router-dom'
import api from '../../config/api'
import HeaderAdmin from './HeaderAdmin'
import style from './searchClassUnique.module.css'
import perfil from '../../Assets/perfil.jpg'
import{ReactComponent as Editar} from '../../Assets/Editar.svg'
import{ReactComponent as Deletar} from '../../Assets/Deletar.svg'

export default function SearchClassUnique() {
  const [content, setContent] = React.useState()
    const { id } = useParams()

    const history = useHistory();
    
    const handleEdit = () => {
      history.push(`/add-class/${id}`)
    }

    const handleDelete = async () => {
      const modal = window.confirm("Você deseja mesmo deletar essa turma?")

      if(modal){
        try {
          const response = await api.delete(`/school-class/${id}`)

          history.push('/search-class')
        } catch (error) {
          alert(error)
        }
      }
    }


    React.useEffect(() => {
      async function req(){
        const response = await api.get(`/school-class/${id}`)


        if(response.status === 200) setContent(response.data)
      }

      req()
    }, [id])
    
    return (
        <>
          <HeaderAdmin/>
          <section className={style.ContainerMain}>
            <div className={style.ContainerContent}>
              <h2>Perfil da Turma</h2>
              <div className={style.ContainerContentHeader} >
                <div className={style.ContainerPhoto} style={{backgroundImage: `url(${perfil})`}}/>
                
                <div className={style.ContainerAction} onClick={handleEdit}>
                  <Editar/>
                  <p>Editar</p>
                </div>

                <div className={style.ContainerAction} onClick={handleDelete}>
                  <Deletar />
                  <p>Deletar</p>
                </div>
                
              </div>
              <div className={style.ContainerDetails} >
                  {content && <p>Nome da Turma: {content.class_code}</p>}
                  {content && <p>Nome máximo de alunos: {content.max_students}</p>}
                  {content && <p>Status: {content.status ? 'Ativa': 'Inativa'}</p>}
              </div>  
            </div>
          </section>
        </>
    )
}
