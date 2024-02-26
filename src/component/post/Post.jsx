import './post.css'
import {useState} from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData.js'
function Post({post}){
    const [like,setLike]=useState(post.like)
    const [islike,setIsLike]=useState(false)
    const handlelike=()=>{
        setLike(islike?like-1:like+1)
        setIsLike(!islike)
    }

 return(
    <div className="post">
    <div className="postwrapper">
    <div className="posttop">
    <div className="posttopleft">
        <img src={Users.filter((user)=>user.id===post.id)[0].profilePicture} alt='profile Pic' className='profilepic'/>
        <span className='Profilename'>{Users.filter((user)=>user.id===post.id)[0].username}</span>
        <span className='ProfileTime'>{post.date}</span>
    </div>
    <div className="posttopright">
    <MoreVertIcon/>
    </div>

    </div>
    <div className="postcenter">
        <span className="postcaption">{post.desc}</span>
        <img src={post.photo} alt="new Post" className='newPost'/>
    </div>
    <div className="postbottom">
    <div className="postbottomleft">
        <img src="/assests/heart.png" className='hearticon' onClick={handlelike} alt="heart btn"/>
        <img src="/assests/like.png" className='likeicon' onClick={handlelike} alt="like btn"/>
         <span className='likescount'> {like} people like it</span>
    </div>
    <div className="postbottomright">
        <sapn className="commentsection">{post.comment} Comments</sapn>
    </div>

    </div>
    </div>
    </div>
 )
  }
export default Post