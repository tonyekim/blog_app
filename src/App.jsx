import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import Article from "./components/card/BlogArticle";
import Form from "./components/form/Form";


function App() {
  const [data, setData] = useState([]);
  const [addBlog, setAddBlog] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://127.0.0.1:5000/api");
      setData(result.data);
      console.log(data);
    }
    fetchData();
  }, []);

  const handleFormSubmit = () => {
    axios
      .post(
        "http://127.0.0.1:5000/api/create",
        {
          content: addBlog,
        },
        {
          headers: {
            "content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setAddBlog("");
      })
      .catch((error) => console.log(error));
  };

  const handleFormChange = (inputValue) => {
    setAddBlog(inputValue);
    console.log(addBlog);
  };

  const getLatestBlog = () => {
    axios
      .get("http://127.0.0.1:5000/api")
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
      })
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };

  return (

    <div>
      <div className="flex items-center justify-center text-2xl font-semibold"><h1 className="text-2xl font-semibold">BLOG APPLICATION</h1></div>
      <Form
        userInput={addBlog}
        onFormChange={handleFormChange}
        onFormSubmit={handleFormSubmit}
      />
      <Article data={data} />
    </div>
  );
}

export default App;
