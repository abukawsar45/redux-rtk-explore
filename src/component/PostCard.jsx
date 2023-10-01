
import { useGetPostsQuery } from "../redux/features/api/baseApi";


const PostCard = () => {

  const {data} = useGetPostsQuery();
  console.log(data)

  return (
    <div>
      post card
    </div>
  );
};


export default PostCard;