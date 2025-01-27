import React from 'react';

const NumberInput = ({ label, id, value, onChange, min, max }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type="number"
                value={value}
                onChange={onChange}
                min={min !== undefined ? min : ''}
                max={max !== undefined ? max : ''}
            />
        </div>
    );
};

export default NumberInput;
