import React from 'react'
import Topbar from '../component/topbar/Topbar';
import Feed  from '../component/feed/Feed'
import Sidebar from "../component/sidebar/Sidebar"
import Rightbar from "../component/rightbar/Rightbar"
import "./home.css"
function Home() {
  return (
    <>
      <Topbar/>
        <div className="homecontainer">
        <Sidebar/>
          <Feed/>
          <Rightbar/>
        </div>
    </>
  )
}

export default Home
