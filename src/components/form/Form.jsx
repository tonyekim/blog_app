import React, { useState, useEffect } from "react";
import axios from "axios";


function Form({ userInput, onFormChange, onFormSubmit }) {
  const handleChange = (event) => {
    onFormChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center justify-center my-8">
        <input className="border-2 h-10 w-96 px-2 rounded-l-md" type="" required value={userInput} onChange={handleChange} placeholder="create a blog post..." />
        <input className="block bg-green-800 h-10 outline-none px-8 uppercase rounded-r-md text-white" type="submit"></input>
      </form>
    </>
  );
}

export default Form;
