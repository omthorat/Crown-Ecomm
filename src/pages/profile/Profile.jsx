import Topbar from '../../component/topbar/Topbar';
import Feed  from '../../component/feed/Feed'
import Sidebar from "../../component/sidebar/Sidebar"
import Rightbar from "../../component/rightbar/Rightbar"
import './profile.css'
function Profile(){
    return(
        <>
             <Topbar/>
        <div className="profilecontainer">
        <Sidebar/>
        <div className="profileright">
        <div className="profilerighttop">
        <div className="profilerightcover">
        <img src="assests/post/3.jpeg" alt='background Img' className='rightprofilebackgroundimg'/>
        <img src="assests/person/4.jpeg" alt='person Img' className='rightprofileimg'/>
        </div>
        <div className="profileeinfo">
        <h4 className='username'>Omkar Thorat</h4>
        <span className='profiledesc'>how are doing my friends..!</span>
        </div>
        </div>

        <div className="profilerightbottom">
        <Feed/>
          <Rightbar Profile='profile'/>
          </div>
        </div>
         
        </div>
        </>
    )
}
export default Profile