import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
//styles
import './index.css';


const Input = ({ name, register, title, errors, type, className, handleChange, accept }) => {
    return (
        <div className={`${className}`}>
            <span className="input-label">
                {title}
            </span>
            <div className={'error-msg'} >
                <input
                    className={type === 'file' ? 'custom-file-input' : ''}
                    name={name}
                    ref={register}
                    type={type}
                    onChange={handleChange}
                    accept={accept}
                />
                <ErrorMessage errors={errors} name={name} as={<div />} />
            </div>
        </div>
    );
};

export default Input