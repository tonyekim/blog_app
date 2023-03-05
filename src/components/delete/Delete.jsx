import React from 'react';
import { useNavigate } from 'react-router-dom';


const Delete = ({ id }) => {
    const History = useNavigate()

    const deleteBlog = () => {
        fetch(`http://127.0.0.1:5000/api/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                id: id
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                History.push('/')
        })
    }
  return <button onClick={deleteBlog} className="btn btn-danger">Delete</button>;
}

export default Delete