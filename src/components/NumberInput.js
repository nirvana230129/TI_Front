import React from 'react';

class NumberInput extends React.Component {
    render() {
        const { label, id, value, onChange, min, max } = this.props;

        return (
            <div>
                <label htmlFor={id}>{label}</label>
                <input
                    id={id}
                    type='number'
                    value={value}
                    onChange={onChange}
                    min={min !== undefined ? min : ''}
                    max={max !== undefined ? max : ''}
                />
            </div>
        );
    }
}

export default NumberInput;
