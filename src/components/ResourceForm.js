import React, { useState } from 'react';

const ResourceForm = () => {
  const [fullName, setFullName] = useState('');
  const [resume, setResume] = useState(null);
  const [technology, setTechnology] = useState([]);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleTechnologyChange = (e) => {
    const selectedTech = Array.from(e.target.selectedOptions, (option) => option.value);
    setTechnology(selectedTech);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can perform further processing like submitting the form data to a backend API or saving it in a database.

    // Reset the form fields after submission
    setFullName('');
    setResume(null);
    setTechnology([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input type="text" value={fullName} onChange={handleFullNameChange} />
      </label>
      <br />
      <label>
        Upload Resume:
        <input type="file" onChange={handleResumeChange} />
      </label>
      <br />
      <label>
        Technology:
        <select multiple value={technology} onChange={handleTechnologyChange}>
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
          <option value="JavaScript">JavaScript</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ResourceForm;
