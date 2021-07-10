import React, {createContext, useContext} from 'react'

const ModalContext = createContext()

export function ModalContextStorage({children}) {

    const [state, setState] = React.useState(0)

    function ChangeState(num){
        setState(num)
    }

    return (
        <ModalContext.Provider value={{state, ChangeState}} >
            {children}    
        </ModalContext.Provider>           
    )
}

export const Modal = () => useContext(ModalContext)
