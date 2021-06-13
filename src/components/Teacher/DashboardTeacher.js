import React from 'react';
import { Link } from 'react-router-dom'; 

import HeaderTeacher from './HeaderTeacher';
import style from './DashboardTeacher.module.css';

import{ReactComponent as Diary} from '../../Assets/Diario.svg'
import{ReactComponent as CreateRoll} from '../../Assets/CriarChamada.svg'
import{ReactComponent as ListClass} from '../../Assets/ControledeTurma.svg'

export default function DashboardTeacher() {


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