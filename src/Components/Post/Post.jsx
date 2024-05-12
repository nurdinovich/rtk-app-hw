import { useEffect } from 'react'
import classes from './Post.module.css'
import { useDispatch, useSelector } from 'react-redux'
import fetchPost from '../../store/reducers/postCreator'

const Post = () => {
  const { post, isLoadingPost, postError } = useSelector((state) => state.post)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPost())
  }, [dispatch])

  return (
    <div className={classes.container}>
      {isLoadingPost && 'Loading...'}
      {postError && postError}
      {post.map((item) => (
        <div className={classes.content} key={`post-${item.id}`}>
          <img src={item.img} alt="img" />
          <h1>{item.title}</h1>
          <p>{item.price}$</p>
        </div>
      ))}
    </div>
  )
}

export default Post