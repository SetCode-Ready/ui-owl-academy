import React from 'react';
import { Link, useHistory } from 'react-router-dom'; 
import { User } from '../UserContext';
import HeaderTeacher from './HeaderTeacher';
import style from './DashboardTeacher.module.css';
import{ReactComponent as Diary} from '../../Assets/Diario.svg'
import{ReactComponent as CreateRoll} from '../../Assets/CriarChamada.svg'
import{ReactComponent as ListClass} from '../../Assets/ControledeTurma.svg'

export default function DashboardTeacher() {

  const {isAuth} = User()
    const history = useHistory()

  React.useEffect(() => {
    const logged = isAuth(2)

    if(!logged){
        history.push('/')
    }

}, [history, isAuth])

  return (
    <>
      <HeaderTeacher />

      <section className={style.ContainerMain}>
        <div className={style.ContainerContent}>
            <Link className={style.Content} to="daily">
              <Diary/>
              <p>Visualizar Diários</p>
            </Link>
        
            <Link className={style.Content} to="create-roll">
              <CreateRoll/>
              <p>Fazer chamada</p>
            </Link>
            
            <Link className={style.Content} to="class">
              <ListClass/>
              <p>Listar Turmas</p>
            </Link>
        </div>
      </section>
    </>
  );  
}