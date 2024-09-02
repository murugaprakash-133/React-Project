import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => [...prevData, formData]);
    setFormData({ name: '', age: '' });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Current Data:', data);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [data]);

  return (
    <div>
      <h1>Form Submission</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name"/>
        <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Age"/>
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
              <tr key={index}>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
