import React, {createContext, useContext} from 'react'

const ModalContext = createContext()

export function ModalContextStorage({children}) {

    const [state, setState] = React.useState(true)

    function ChangeState(){
        setState(!state)
    }

    return (
        <ModalContext.Provider value={{state, ChangeState}} >
            {children}    
        </ModalContext.Provider>           
    )
}

export const Modal = () => useContext(ModalContext)
