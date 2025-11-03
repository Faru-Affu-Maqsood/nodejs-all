import { useEffect } from "react";
import { useState } from "react";

const BasicEffect = () => {
    const [] = useState();

    useEffect(() => {
        console.log('BasicEffect component mounted');
    }, []);

    return (
        <>
            <h1>Check the console to see the message</h1>
        </>
    );
};

export default BasicEffect;