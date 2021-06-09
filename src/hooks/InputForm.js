import React from 'react'

export default function InputForm() {
    const [value, SetValue] = React.useState('')
    const [erro, setErro] = React.useState('')

    function onChange({target}){
        setErro(null)
        SetValue(target.value)
    }

    function validate(value){
        if(value.length === 0) setErro("Preencha esse campo")
        return false;
    }

    return {
        value,
        erro,
        SetValue,
        onChange,
        onBlur: () => validate(value),
        validate: () => validate(value),
    }
}
