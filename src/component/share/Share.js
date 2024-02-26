import React from 'react'
import './share.css'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function Share() {
  return (
    <div className="share">
    <div className='sharewrapper'>
    <div className="sharetop">
        <img src="./assests/person/1.jpeg" alt="shared Img" className="shareImg" />
        <input type="text" placeholder="What's up How are Doing" className='sharetext'/>
    </div>
    <hr className='sharehr'/>
    <div className="sharebottom">
    <div className="sharebottomitems">
    <div className="sharebottomitem">
        <PhotoLibraryIcon htmlColor='tomato' className='sharebottomitemicon'/>
        <span className='sharebottomitemspan'>Photos & Videos</span>
    </div>

    <div className="sharebottomitem">
        <LabelIcon htmlColor='blue' className='sharebottomitemicon'/>
        <span className='sharebottomitemspan'>Tag</span>
    </div>
    <div className="sharebottomitem">
        <LocationOnIcon htmlColor='green' className='sharebottomitemicon'/>
        <span className='sharebottomitemspan'>Location</span>
    </div>
    <div className="sharebottomitem">
        <EmojiEmotionsIcon htmlColor='glodenrod'  className='sharebottomitemicon'/>
        <span className='sharebottomitemspan'>Feelings</span>
    </div>
    </div>
    <button className='shareBtn'>Share</button>
    </div>
    </div>
    </div>
  )
}
export default Share