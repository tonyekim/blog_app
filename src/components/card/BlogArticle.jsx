import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Delete from "../delete/Delete";
import myImage from "../../../public/img/b.jpg";

function Article({ data }) {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
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
  }, [id]);

  return (
    <div className="grid grid-cols-3 pl-6">
      {data.map((article) => {
        return (
          // <div key={article.id}>
          //   <Link key="id" to={`${data.id}`}>
          //   <h1>{article.content}</h1>
          //   </Link>

          //   <div className="row">
          //     <div className="col-md-1">
          //       <Delete id={id} />

          //     </div>
          //     <div className="col-md-1">

          //     </div>
          //   </div>
          //   <hr className="post_line" />
          // </div>

          <div className="" key={article.id}>
            <div className="bg-white shadow-lg border border-gray-200 rounded-lg max-w-sm mb-5">
              <a href="#">
                <img class="rounded-t-lg" src={myImage} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                    Best Blog
                  </h5>
                </a>
                <p className="font-normal text-gray-700 mb-3">
                  {article.content}
                </p>
                <Delete id={id} />
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Article;
