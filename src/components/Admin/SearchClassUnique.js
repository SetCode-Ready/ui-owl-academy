import React from 'react'
import { Modal } from '../ModalContext'
import AddStudant from './AddStudant'
import ClassMainDisplay from './ClassMainDisplay'
import ListStudentClass from './ListStudentClass'
import ListTeachersClass from './ListTeachersClass'
import AddTeachers from './AddTeachers'


export default function SearchClassUnique() {

  const {state} = Modal()

  switch (state){
    case 1:
      return <AddStudant/>
    case 2:
      return <ListStudentClass/>
    case 3:
      return <ListTeachersClass/>
    case 4:
      return <AddTeachers/>
    default:
      return <ClassMainDisplay/>
  }
  
}