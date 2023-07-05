import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    //esta funcion es para sacar el dato ingresado en el input
    const onInputChange = ( event ) => {
        setInputValue( event.target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1) return; /* esto es para agregar 2 o mas caracteres y q no ingrese campos vacios */

        onNewCategory( inputValue.trim());
        setInputValue(''); /* para que se borre la info del input al hacer enter */
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
            className="input__search"
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
            />
        </form>
    )
}
