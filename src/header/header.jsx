import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { IconButton, Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar';


import React from 'react'

function header() {
  return (
    <div className='header'>
      <div className="header_leftsection">
        <IconButton>
          <MenuIcon sx={{scale:'1.3'}}/>
        </IconButton>
        <div className='header_logo'>
          <YouTubeIcon sx={{scale:'1.5', marginRight:'10px'}}/>
          <h3>KF-Tube</h3>
        </div>
      </div>
      <div className='header_searchbar'>
        <div className="searchbar_input">
          <div className="searchbar_input_left">
            <SearchIcon className='left_searchicon'/>
            <input type="text" placeholder='Rechercher' />
          </div>
          <div className="searchbar_input_right">
            <SearchIcon/>
          </div>
        </div>
        <Tooltip title="Rechercher">
          <IconButton aria-label='voiceSearch'>
            <MicIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div className="header_rightsection">
        <Tooltip title="Créer">
          <IconButton>
            <VideoCallIcon sx={{scale:'1.2'}}/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Notifications">
          <IconButton>
            <NotificationsNoneIcon sx={{scale:'1.2'}}/>
          </IconButton>
        </Tooltip>
        <Avatar>OP</Avatar>
      </div>
    </div>
  )
}

export default header

