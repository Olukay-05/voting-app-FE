import React from 'react'

const FormInput = ( { label, id, type, name, value, onChange } ) => {
  return (
    <div>
        <label>
            { label }
        </label>

        <input 
            id={ id }
            type={ type }
            name={ name }
            onChange={ onChange }
            className="form-input"
        />
    </div>
  )
}

export default FormInput