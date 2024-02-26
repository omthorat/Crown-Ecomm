import React from 'react'
import Share from '../share/Share'
import Post from '../post/Post'
import {Posts} from '../../dummyData.js'
import './feed.css'
 function Feed() {
  return (
    <div className='feed'>
     <div className="feedcontainer">
      <Share/>
      {/* <Post/> */}
      {
          Posts.map((p)=>(
            <Post key={p.id} post={p}/>
            
            ) )
      }
     </div>
    </div>
  )
}
export default Feed