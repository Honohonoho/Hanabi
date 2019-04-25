import React, {useState} from 'react';
import Dialog from './dialog';

export default function () {
    const [x, setX] = useState(false);
    return (
        <div>
            <button onClick={() => {setX(!x);}}>click</button>
            <Dialog visible={x}>
                <span>Dialog Content Dialog Content Dialog Content Dialog Content Dialog Content</span>
            </Dialog>
        </div>
    );
}