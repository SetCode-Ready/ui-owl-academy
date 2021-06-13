import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../config/api';

import style from './CreateRoll.module.css';

import HeaderTeacher from './HeaderTeacher.js';

export default function CreateRoll() {
  const { register, handleSubmit } = useForm();

  const [schoolClasses, setSchoolClasses] = useState([]);
  const [loading, setLoading] = useState(false);

  const populateSchoolClasses = async() => {
    const response = await api.get('/school-class');
    
    setSchoolClasses(response.data);
  }

  useEffect(() => {
    populateSchoolClasses();
  }, []);
  
  const onSubmit = (data) => {
    const { SchoolClass: school_class, ExpirationTime: expiration_time } = data;

    const dataToSend = {
      school_class,
      expiration_time,
    }
    console.log(dataToSend);
  };

  return (
    <>
      <HeaderTeacher />

      <section className={style.containerMain}>
        <div className={style.containerDiv}>
          <h1 className={style.title}>Criar chamada</h1>

          <form className={style.form} onSubmit={handleSubmit(onSubmit)} >
            <fieldset>
              <label>Turma:</label>
              <select {...register('SchoolClass')} placeholder="Selecione uma turma">
                <option disabled selected="selected">Selecione uma turma...</option>
                {schoolClasses && schoolClasses.map(items => {
                  return (
                    <option key={items.id} value={items.id}>{items.class_code}</option>
                  )
                })}
              </select>
            </fieldset>

            <fieldset>
              <label>Tempo de expiração (minutos):</label>
              <input {...register('ExpirationTime')} placeholder="Ex.: 2" type="number" />
            </fieldset>
            {loading ? <button disabled className={style.submit} type="submit">Criar</button> : <button className={style.submit} type="submit">Criar</button>}
          </form>
        </div>
      </section>
    </>
  );  
}