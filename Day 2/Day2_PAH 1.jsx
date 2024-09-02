import React, { useState } from "react";

const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(name);
        console.log(email);
        console.log(message);

        setName('');
        setEmail('');
        setMessage('');
    } 
    return (
        <div style={{display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems: 'center',
            height:'100vh',
            textAlign:'center',
        }}>
            <form action={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="message">Message: </label>
                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default App;