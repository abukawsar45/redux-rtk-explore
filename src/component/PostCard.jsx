
import { Link } from "react-router-dom";



const PostCard = ({ post }) => {
  // console.log(post);
  const { id, title, body } = post || {};


  return (
    <div className='my-3 bg-slate-400 rounded-lg py-5 px-3 text-white'>
      <div className='text-end '>
        <Link
          to={`posts/${id}`}
          onClick={() => handleLinkButton(id)}
          className=' text-end px-8 py-3 bg-green-400 rounded-lg'
        >
          More
        </Link>
      </div>
      <h4 className='text-4xl text-pink-300'>{id}</h4>
      <h1 className='text-2xl font-semibold'>{title}</h1>
    </div>
  );
};


export default PostCard;