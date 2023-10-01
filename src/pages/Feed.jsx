import PostCard from "../component/PostCard";
import { useGetPostsQuery } from "../redux/features/api/baseApi";



const Feed = () => {

  const { data: posts,isLoading, isError, error } = useGetPostsQuery(); 
  console.log('err',error);
  console.log('err',isError);
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
      <h2>feed </h2>
      <h2>{posts?.length}</h2>
      <div className="flex flex-col gap-5">
        {
          posts?.map((post) => <PostCard key={ post.id } post={ post } />)
        }
      </div>
    </div>
  );
};

export default Feed;