import React from 'react';

const Button = ({ increment }) => {
    // console.log('Button rerendered');
    
    return (
        <button onClick={increment}>
            +
        </button>
    );
}

export default React.memo(Button);
