import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

function Profile() {
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    API.get(`/users/${userId}`).then((res) => setProfile(res.data));
  }, [userId]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h2>{profile.user.name}</h2>
      <p>{profile.user.bio}</p>
      <h3>Posts</h3>
      {profile.posts.map((post) => (
        <div key={post._id}>
          <p>{post.content}</p>
          <p>
            <small>{new Date(post.createdAt).toLocaleString()}</small>
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Profile;
