import React from 'react';
import './Header.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import GroupIcon from '@material-ui/icons/Group';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { AccessAlarm} from '@material-ui/icons';


const Header = () => {
    return (
        <div className="header">
            
         <h1><GroupIcon fontSize="large"/> Social Buddy</h1>
        </div>
    );
};

export default Header;