import React from 'react';

const StringInput = ({ placeholder, value, onChange }) => {
    return (
        <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required
        />
    );
};

export default StringInput;
