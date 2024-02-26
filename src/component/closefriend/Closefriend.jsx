function Closefriend({user}){

    return(<>
          <div className='friendlistItem'>
          <img src={user.profilePicture} alt='' className='friendImg'/>
          <span className='friendName'>{user.username}</span>
        </div>
    </>)
    
}
export default Closefriend