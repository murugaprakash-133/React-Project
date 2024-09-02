import React from 'react';

const App = () => {
    const display = () => {
        alert('Message from Javacript Alert!');
        console.log('Message to Developer');
    };
    return (
        <div style={{textAlign:'center'}}>
            <h1>Let we see the output of JAVASCRIPT</h1>
            <button style={{padding:'10px 20px', fontSize:'bold', cursor:'pointer'}} onClick={display}>Click</button>
        </div>
    );
};

export default App;