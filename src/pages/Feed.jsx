import { useForm } from "react-hook-form";
import PostCard from "../component/PostCard";
import { useGetPostsQuery, useSetPostMutation } from "../redux/features/api/baseApi";



const Feed = () => {
    const {
      register,
      handleSubmit,
      
    } = useForm();

  const { data: posts,isLoading, isError, error } = useGetPostsQuery(); 
  // console.log('err',error);
  // console.log('err',isError);

  const [setPost,{data: postData}] = useSetPostMutation();
  console.log(postData)

  const onSubmit = (data) => {
     setPost(data)
  }
  if (isLoading)
  {
    return <p className="text-6xl text-center p-8 text-green-400">Loading</p>
  };

  if (!isLoading && isError)
  {
    // console.log('first')
    return <p className="text-black text-9xl  text-center p-8">Something is wrong</p>
  }

  return (
    <div>
      <div className='my-5 bg-slate-300 py-12 px-6'>
        <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
          <input
            className='px-2 py-2 w-96 focus:border-2 border-gray-950 rounded-lg mx-4'
            {...register('searchValue')}
          />

          <input className='bg-green-500 px-4 py-2 rounded-lg' type='submit' />
        </form>
      </div>
      <h2>feed </h2>
      <h2>{posts?.length}</h2>
      <div className='flex flex-col gap-5'>
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;