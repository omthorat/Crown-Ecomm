import React from 'react'
import "./rightbar.css"
import Online from '../online/Online.jsx'
import {Users} from "../../dummyData.js"

const Home=()=>{
  return(
    <>
      <div className="rightwrapper">
      <div className="todaysbirthday">
       <img src="/assests/gift.png" alt='birth gift icon' className="gifticon"/>      
       <span><b>Pola Foster </b> and other friends have BirthDay today..! </span>
     </div>
     <img src="assests/ad.png" alt="ad" className='adcontainer'/>
      <h2 className='headingon'>Online Friends</h2>
       <ul className='listonlineFriends'>
       {
        Users.map((user)=>(
          <Online key={user.id} user={user}/>
        ))
       }
        
       </ul>
      </div>
    </>
  )

}

const Profilepage=()=>{
  return(
    <>
      <div className='rightbarprofile'>
       <div className='rightbarprofileinfo'>
       <h4 className='rightbarprofileinfohead'>User information</h4>
       <div className='rightbarprofileitem'>
        <span className='profileitemkey'>City:</span>
        <span className='profileitemvalue'>New Work</span>
        </div>
        <div className='rightbarprofileitem'>
        <span className='profileitemkey'>From:</span>
        <span className='profileitemvalue'>Madrid</span>
        </div>
        <div className='rightbarprofileitem'>
        <span className='profileitemkey'>Gender:</span>
        <span className='profileitemvalue'>Male</span>
        </div>
        <div className='rightbarprofileitem'>
        <span className='profileitemkey'>Relationship:</span>
        <span className='profileitemvalue'>Single</span>
        </div>
        
        </div>
        <div className='rightbarprofilefollowers'>
        <h4 className='rightbarprofilefollowershead'>User Friends</h4>
        <div className='rightbarprofilefollowerslist'>
        <div className='profilefollowerslist'>
          <img src="assests/person/1.jpeg" alt='follower img' className='profilefollowerimg'/>
          <span className='profilefollowername'>taylor carter</span>
          </div>
          <div className='profilefollowerslist'>
          <img src="assests/person/2.jpeg" alt='follower img' className='profilefollowerimg'/>
          <span className='profilefollowername'>Swift Taylor</span>
          </div>
          <div className='profilefollowerslist'>
          <img src="assests/person/3.jpeg" alt='follower img' className='profilefollowerimg'/>
          <span className='profilefollowername'>Jhon Carter</span>
          </div>
          <div className='profilefollowerslist'>
          <img src="assests/person/4.jpeg" alt='follower img' className='profilefollowerimg'/>
          <span className='profilefollowername'>Davite guetta</span>
          </div>
          <div className='profilefollowerslist'>
          <img src="assests/person/5.jpeg" alt='follower img' className='profilefollowerimg'/>
          <span className='profilefollowername'>user Name</span>
          </div>
          <div className='profilefollowerslist'>
          <img src="assests/person/6.jpeg" alt='follower img' className='profilefollowerimg'/>
          <span className='profilefollowername'>sush Khan</span>
          </div>
          <div className='profilefollowerslist'>
          <img src="assests/person/7.jpeg" alt='follower img' className='profilefollowerimg'/>
          <span className='profilefollowername'>Divine</span>
          </div>
      </div>
        </div>
      </div>
    </>
  )

}
 function Rightbar({Profile}) {

  return (
    <div className='rightbar'>
     
     {Profile?<Profilepage/>:<Home/>}
      
    </div>
  )
}
export default Rightbar