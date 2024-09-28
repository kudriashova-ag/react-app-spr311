import React, { useMemo } from 'react';

const IsFive = ({ value }) => {
    // console.log("IsFive rerendered");
    

    const getResult = () => {
        for (let i = 0; i < 1000000000; i++) { }
        return value === 5 ? "count is Five" : "No";
    }

    const result = useMemo(getResult, [value]);

    return (
        <div>
            {result}
        </div>
    );
}

export default React.memo(IsFive, (prevProps, nextProps) => { 
    // false - redender
    return !(nextProps.value === 5 || prevProps.value === 5);
});
