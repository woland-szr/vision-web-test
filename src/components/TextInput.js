import React from 'react'

const TextInput = ({
    name,
    title,
    type,
    value,
    onChange,
    onBlur,
    errors,
    touched
}) => (
    <div className="pure-control-group">
        <label htmlFor={name}>{title}</label>
        <input type={type}
               name={name}
               value={value}
               onChange={onChange}
               onBlur={onBlur}/>
        {(errors && touched) && <span className="pure-form-message-inline">{errors}</span>}
    </div>
)

export default TextInput