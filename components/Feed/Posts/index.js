import { useCollection } from 'react-firebase-hooks/firestore';

import { db } from '../../../firebase';
import Post from './Post';

function Posts({ posts }) {
  const [realtimePosts, loading, error] = useCollection(
    db.collection('posts').orderBy('timestamp', 'desc')
  );

  return (
    <div>
      {realtimePosts
        ? realtimePosts?.docs.map((post) => {
            return (
              <Post
                key={post.id}
                name={post.data().message}
                email={post.data().email}
                timestamp={post.data().timestamp}
                image={post.data().image}
                postImage={post.data().postImage}
                message={post.data().message}
              />
            );
          })
        : posts?.map((post) => {
            return (
              <Post
                key={post?.id}
                name={post?.message}
                email={post?.email}
                timestamp={post?.timestamp}
                image={post?.image}
                postImage={post?.postImage}
                message={post?.message}
              />
            );
          })}
    </div>
  );
}

export default Posts;
