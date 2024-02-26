import React from 'react'
import './sidebar.css'
import {Users} from "../../dummyData.js"
import Closefriend from '../closefriend/Closefriend.jsx'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
 function Sidebar() {
  return (
    <div className='sidebarcontainer'>
     <div className='sidebariconcontainer'>
      <ul className='siderbarIconList'>
        <li className='siderbarIconListItem'>
         <RssFeedIcon className='siderbarListItemIcon'/>
         <span className='siderbarListItemText'>Feed</span>
        </li>
        <li className='siderbarIconListItem'>
         <ChatIcon className='siderbarListItemIcon'/>
         <span className='siderbarListItemText'>Chat</span>
        </li>
        <li className='siderbarIconListItem'>
         <PlayCircleIcon className='siderbarListItemIcon'/>
         <span className='siderbarListItemText'>Video</span>
        </li>
        <li className='siderbarIconListItem'>
         <GroupIcon className='siderbarListItemIcon'/>
         <span className='siderbarListItemText'>Groups</span>
        </li>
        <li className='siderbarIconListItem'>
         <BookmarksIcon className='siderbarListItemIcon'/>
         <span className='siderbarListItemText'>Bookmarks</span>
        </li>
        <li className='siderbarIconListItem'>
         <HelpOutlineIcon className='siderbarListItemIcon'/>
         <span className='siderbarListItemText'>Questions</span>
        </li>
        <li className='siderbarIconListItem'>
         <WorkOutlineIcon className='siderbarListItemIcon'/>
         <span className='siderbarListItemText'>Jobs</span>
        </li>
        <li className='siderbarIconListItem'>
         <EventIcon className='siderbarListItemIcon'/>
         <span className='siderbarListItemText'>Events</span>
        </li>
        <li className='siderbarIconListItem'>
         <SchoolIcon className='siderbarListItemIcon'/>
         <span className='siderbarListItemText'>Courese</span>
        </li>
        <li className='siderbarIconListItem'>
         <RssFeedIcon className='siderbarListItemIcon'/>
         <span className='siderbarListItemText'>Feed</span>
        </li>
      </ul>
      <button className='sidebarButton'>Show More</button>
       <hr className='sidebarHr'/>
       <div className='friendlist'>
        
        {
        Users.map((user)=>(
          <Closefriend key={user.id} user={user}/>
        ))
       }
       </div>
     </div>
     {/* <div className=''></div>
     <div className=''></div>
     <div className=''></div>
     <div className=''></div> */}
    </div>
  )
}
export default Sidebar