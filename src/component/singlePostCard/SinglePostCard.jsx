import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../../redux/features/api/baseApi';
import PostCard from '../PostCard';

const SinglePostCard = () => {
  const { id } = useParams();
  console.log(id);

  const {data:  post, isLoading, isError, error} = useGetPostByIdQuery(id);
  console.log(post);

  const { title, body } = post || {};

  return (
    <div className='my-3 bg-slate-400 rounded-lg py-12 lg:py-24 px-3 text-white'>
      <div className='text-center '>
        <Link
          to='/'
          className=' text-end px-8 py-3 bg-green-400 rounded-lg'
        >
          Home
        </Link>
      </div>
      <h4 className='text-4xl text-pink-300'>{id}</h4>
      <h1 className='text-2xl font-semibold'>{ title }</h1>
      <div>
        {body}
      </div>
    </div>
  );
};

export default SinglePostCard;