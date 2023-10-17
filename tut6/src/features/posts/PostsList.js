import { useSelector } from 'react-redux';
import { selectPostIds } from './postsSlice';
import PostsExcerpt from './PostsExcerpt';
import { useGetPostsQuery } from './postsSlice';
import { Orbit } from '@uiball/loaders';


const PostsList = () => {
    const {
      isLoading,
      isSuccess,
      isError,
      error
    } = useGetPostsQuery()

    const orderedPostIds = useSelector(selectPostIds)

    let content;
    if ( isLoading ) {
      content = <div className='loader'> <Orbit size={35} color='royalblue'/> </div>
    } else if ( isSuccess ) {
      content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if ( isError ) {
      content = <p>{error}</p>;
    }

  return (
    <section>
        {content}
    </section>
  )
}

export default PostsList