import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Person2Icon from '@mui/icons-material/Person2';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './topbar.css'
 function Topbar() {
  return (
    <>
    <div className='topbarcontainer'>
    <div className='topbarleft'>
        <span className='logo'>NewSocial</span>
    </div>
    <div className='topbarcenter'>
        <SearchIcon className="searchicon"/>
        <input type="text" placeholder="Search for Friends,News,Reels & everything " className='inputfield'/>
    </div>
    <div className='topbarright'>
    <div className='topbarlinks'>
    <div className='topbarlinksitem'>HomePage</div>
    <div className='topbarlinksitem'>TimeLine</div>
    </div>
    <div class="topbaricons">
    <div class="topbariconsitem">
       <Person2Icon className='icons'/>
       <span className='topbariconsbadge'>1</span>
    </div>
    <div class="topbariconsitem">
       <ChatIcon className='icons'/>
       <span className='topbariconsbadge'>1</span>
    </div>
    <div class="topbariconsitem">
       <NotificationsIcon className='icons'/>
       <span className='topbariconsbadge'>1</span>
    </div>
    
    </div>
    <img src="/assests/person/1.jpeg" alt='' className='topbarimg' />
</div>
</div>
    </>
  )
}
export default Topbar