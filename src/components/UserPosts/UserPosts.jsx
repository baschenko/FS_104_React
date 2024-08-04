import { useEffect, useState } from 'react';
import { fetchPostsById } from '../../services/api';
import { useParams } from 'react-router-dom';

const UserPosts = () => {
  const params = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPostsById(params.userId).then(data => setPosts(data));
  }, [params.userId]);
  return (
    <div>
      <ul>
        {posts.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;
