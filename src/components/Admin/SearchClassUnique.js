import React from 'react'
import { Modal } from '../ModalContext'
import AddStudant from './AddStudant'
import ClassMainDisplay from './ClassMainDisplay'
import ListStudentClass from './ListStudentClass'
import ListTeachersClass from './ListTeachersClass'


export default function SearchClassUnique() {

  const {state} = Modal()

  switch (state){
    case 1:
      return <AddStudant/>
    case 2:
      return <ListStudentClass/>
    case 3:
      return <ListTeachersClass/>
    default:
      return <ClassMainDisplay/>
  }
  
}