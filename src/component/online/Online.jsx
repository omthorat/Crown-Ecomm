function Online({user}){

return(
    <li className='listonlineFriend'>
          <div className='listonlineFriendimg'>
            <img src={user.profilePicture} alt="list of online friends" className='friendimg'/>
            <span className='onlinesign'></span>
          </div>
          <span className='username'>{user.username}</span>
        </li>
)
}
export default Online