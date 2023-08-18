import './side.css'
import SideOption from './side_option/side_option'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Avatar from '@mui/material/Avatar';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import OnlinePredictionOutlinedIcon from '@mui/icons-material/OnlinePredictionOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';

import React from 'react'

function side() {
  return (
    <div className='side'>
      <div className="side_section">
        <SideOption 
        icon= {<HomeIcon/>}
        title="Accueil"/>
        <SideOption 
        icon= {<SubscriptionsOutlinedIcon/>}
        title="Abonnements"/>
      </div>


      <div className="side_section">
        <SideOption 
          icon= {<VideoLibraryOutlinedIcon/>}
          title="Bibliothèque"/>
        <SideOption 
          icon= {<RestoreOutlinedIcon/>}
          title="Historique"/>
        <SideOption 
          icon= {<SlideshowOutlinedIcon/>}
          title="Vos vidéos"/>
        <SideOption 
          icon= {<AccessTimeOutlinedIcon/>}
          title="A regarder plus tard"/>
        <SideOption 
          icon= {<ThumbUpOffAltOutlinedIcon/>}
          title="Vidéos aimées"/>
        <SideOption 
          icon= {<KeyboardArrowDownOutlinedIcon/>}
          title="Plus"/>
      </div>



      <div className="side_section">
        <h4>Abonnements</h4>
        <SideOption 
          avatar={<Avatar>AB</Avatar>}
          title="Abracadabra"/>
        <SideOption 
          avatar={<Avatar>WS</Avatar>}
          title="Webschool"/>
        <SideOption 
          avatar={<Avatar>KF</Avatar>}
          title="KF-dev"/>
        <SideOption 
          icon= {<KeyboardArrowDownOutlinedIcon/>}
          title="Afficher plus"/>
      </div>


      <div className="side_section">
        <h4>Parcourir</h4>
        <SideOption 
          icon= {<WhatshotOutlinedIcon/>}
          title="Tendances"/>
        <SideOption 
          icon= {<MusicNoteOutlinedIcon/>}
          title="Musique"/>
        <SideOption 
          icon= {<OnlinePredictionOutlinedIcon/>}
          title="Direct"/>
        <SideOption 
          icon= {<SportsEsportsOutlinedIcon/>}
          title="Jeux vidéos"/>
        <SideOption 
          icon= {<AnalyticsOutlinedIcon/>}
          title="Actualités"/>
        <SideOption 
          icon= {<EmojiEventsOutlinedIcon/>}
          title="Sports"/>
        <SideOption 
          icon= {<LightbulbOutlinedIcon/>}
          title="Savoirs & Cultures"/>
      </div>



      <div className="side_section">
        <h4>Autres</h4>
        <SideOption 
          icon= {<SettingsSuggestOutlinedIcon/>}
          title="Paramètres"/>
        <SideOption 
          icon= {<FlagOutlinedIcon/>}
          title="Historiques des sign..."/>
        <SideOption 
          icon= {<LiveHelpOutlinedIcon/>}
          title="Aide"/>
        <SideOption 
          icon= {<NewReleasesOutlinedIcon/>}
          title="Commentaires"/>
      </div>
    </div>
  )
}

export default side