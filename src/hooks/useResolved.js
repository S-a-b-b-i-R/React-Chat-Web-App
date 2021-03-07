import { useState, useEffect } from 'react';


export const useResolved = (
    ...vals
) => {
    const [resolved, setResolved] = useState(false);

    useEffect(() => {
        setResolved(vals.every(v => v !== undefined));
    }, [vals]);

    //Return true if resolved, otherwise false
    return resolved;
};