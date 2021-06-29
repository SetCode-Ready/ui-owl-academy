/* eslint-disable no-unused-vars */
import React from 'react'
import {useHistory, useParams} from 'react-router-dom'
import api from '../../config/api'
import HeaderAdmin from './HeaderAdmin'
import style from './searchClassUnique.module.css'
import perfil from '../../Assets/perfil.jpg'
import Editar from '../../Assets/Alterar.svg'
import Deletar from '../../Assets/Deletar.svg'

export default function SearchClassUnique() {
  const [content, setContent] = React.useState()
    const { id } = useParams()

    const history = useHistory();

    
    
    const handleEdit = () => {
      history.push(`/add-teacher/${id}`)
    }

    const handleDelete = async () => {
      const modal = window.confirm("Você deseja mesmo deletar esse aluno?")

      if(modal){
        try {
          await api.delete(`/teacher/${id}`)

          history.push('/search-teacher')
        } catch (error) {
          alert(error)
        }
      }
    }


    React.useEffect(() => {
      async function req(){
        try{
            const response = await api.get(`/teacher/${id}`)
            console.log(response.data)
            if(response.status === 200) setContent(response.data)
        } catch{
            history.push('/search-teacher')
        }
      }

      req()
    }, [history, id])
    
    return (
        <>
          <HeaderAdmin/>
            <section className={style.mainContainer}>
              <div className={style.contentContainer}>
                <div className={style.title}>
                  <h1>Detalhes da Turma</h1>
                </div>
                <div className={style.items}>
                  <ul>
                    <li className={style.perfil}>
                      <img src={perfil} alt={"Foto do Professor"}/>
                    </li>
                    <li className={style.ContainerDetails}>
                      {content && <p>Nome: {content.teacher.name}</p>}
                      {content && <p>CPF: {content.teacher.cpf}</p>}
                      {content && <p>Telefone: {content.teacher.phone_number}</p>}
                      {content && <p>Email: {content.teacher.email}</p>}
                    </li>
                    <li className={style.edit} onClick={handleEdit}>
                      <img src={Editar} alt={"Botão de Editar"}/>
                      <p>Editar Professor</p>
                    </li>
                    <li className={style.delete} onClick={handleDelete}>
                      <img src={Deletar} alt={"Botão de Deletar"}/>
                      <p>Apagar Professor</p>
                    </li>
                  </ul>
                </div>
              </div>
                
            </section>
        </>
    )
}

// 

/*
<div >
                  
                  
              </div> 
              
*/