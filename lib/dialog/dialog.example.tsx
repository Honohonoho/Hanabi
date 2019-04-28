import React, {useState} from 'react';
import Dialog ,{alert, confirm} from './dialog';

export default function () {
    const [x, setX] = useState(false);
    return (
        <div>
            <div>
                <button className="h-button" onClick={() => {setX(!x);}}>click</button>
                <Dialog visible={x} closeOnClickMask={true}
                        buttons={
                            [
                                <button className="h-button" style={{marginRight: "5px"}} onClick={() => {setX(false);}}>Ok</button>,
                                <button className="h-button" onClick={() => {setX(false);}}>Cancel</button>
                            ]
                        }
                        onClose={() => {setX(false);}}
                >
                    <span>Dialog Content Dialog Content Dialog Content Dialog Content Dialog Content</span>
                </Dialog>
            </div>
            <h2>example 2</h2>
            <button onClick={()=> {alert('hi')}}>button</button>
            <button
                onClick={()=> {
                    confirm(
                        'are you sure ?',
                        ()=> {console.log('confirm')},
                        ()=> {console.log('cancel')}
                        )
                    }
                }
            >
                confirm
            </button>
        </div>
    );
}