import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Delete from '../components/delete/Delete'

const Show = () => {
    const {id} = useParams() 
    const [blog, setBlog] = useState([])
    useEffect(() => {
        axios
          .get(`http://127.0.0.1:5000/api/${id}`)
          .then((response) => {
            const data = response.data;
            setBlog(data);
          })
          .catch((error) => {
            console.log(error);
          });

    }, [id])
  return (
      <div>
          {blog.length > 0 && blog.map(data => <div key="id">{data.content}</div>)}
          <Delete id={id} />
    </div>
  )
}

export default Show
