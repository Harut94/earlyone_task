import React from 'react';
import { ErrorMessage } from '@hookform/error-message';


const Input = ({ name, register, title, errors, type, className, handleChange }) => {
    return (
        <div className={`${className}`}>
            <span>
                {title}
            </span>
            <div>
                <input name={name} ref={register} type={type} onChange={handleChange}/>
                <ErrorMessage errors={errors} name={name} as={<div />} />
            </div>
        </div>
    );
};

export default Input 