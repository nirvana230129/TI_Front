import React from 'react';

class StringInput extends React.Component {
    render() {
        const { placeholder, value, onChange } = this.props;

        return (
            <div>
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required
                />
            </div>
        );
    }
}

export default StringInput;
