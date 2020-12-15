import React, { useState } from 'react'

interface Props {
    setCategories : React.Dispatch<React.SetStateAction<string[]>>
}

export const AddCategory = ( { setCategories }: Props ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if( inputValue.trim().length > 2 ){
            setCategories( (cats: string[])=> [inputValue, ...cats ])
            setInputValue("")
        }

    }

    return (
            <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
            </form>
    )
}