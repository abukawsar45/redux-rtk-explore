import React from 'react';
import { useGetPostsQuery } from '../redux/features/api/baseApi';
import PostCard from '../component/PostCard';

const Feed = () => {

  const {data: posts, isLoading, isError, error} = useGetPostsQuery(); //* Returns an objects

  return (
    <div>
      <h2>feed </h2>
      <div className="flex flex-col gap-5">
        {
          posts?.map(post => <PostCard key={ post.id } post={ post } />)
        }
      </div>
    </div>
  );
};

export default Feed;