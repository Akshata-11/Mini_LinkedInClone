import React, { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import "./css/Home.css";

function Home() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/posts")
      .then((res) => setPosts(res.data))
      .catch(() => navigate("/login"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/posts", { content });
      setPosts([res.data, ...posts]);
      setContent("");
    } catch (err) {
      alert("Failed to post");
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="container">
          <h2 className="heading">Home Feed</h2>

          <form onSubmit={handleSubmit}>
            <div className="post-add">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write here !"
              />
              <button className="post-btn" type="submit">
                Post
              </button>
            </div>
          </form>
        </div>

        {posts.map((post) => (
          <div className="post-container" key={post._id}>
            <p className="post-timestamp">
              <strong>{post.author.name}</strong> -{" "}
              {new Date(post.createdAt).toLocaleString()}
            </p>
            <p className="post-content">{post.content}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
