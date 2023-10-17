import { useSelector } from 'react-redux';
import { selectPostIds, getPostsStatus, getPostsError } from './postsSlice';
import PostsExcerpt from './PostsExcerpt';
import { Orbit } from '@uiball/loaders';


const PostsList = () => {
    const orderedPostIds = useSelector(selectPostIds)
    const postsStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    let content;
    if (postsStatus === 'loading') {
      content = <div className='loader'> <Orbit size={35} color='royalblue'/> </div>
    } else if (postsStatus === 'succeeded') {
      content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (postsStatus === 'failed') {
      content = <p>{error}</p>;
    }

  return (
    <section>
        {content}
    </section>
  )
}

export default PostsList