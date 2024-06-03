import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, ImageListItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PersonIcon from '@mui/icons-material/Person';
import ReportIcon from '@mui/icons-material/Report';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';

const useStyles = makeStyles({
  listItem: {
    borderRadius: '10px 0px 0px 0px',
  },
  eventListItem: {
    width: '287px',
    height: '52px',
    top: '200px',
    left: '6.5px',
    padding: '10px 30px 10px 30px',
    gap: '20px',
    position: 'absolute',

  },
  suspendListItem: {
    width: '287px',
    height: '52px',
    top: '271px',
    left: '6.5px',
    gap: '20px',
    padding: '10px 30px 10px 30px',
    position: 'absolute',
  },
  reportListItem: {
    width: '287px',
    height: '52px',
    top: '343px',
    left: '6.5px',
    gap: '20px',
    padding: '10px 30px 10px 30px',
    position: 'absolute',
  },
  manager_Name:{
    width: '260px',
    height: '18px',
    top: '1027px',
    left: '30px',
    gap:'0px',
    opacity: '0px',
  },
  logout_icon:{
    width: '32px',
    height: '32px',
    top: '1000px',
    left: '258px',
    padding: '6.67px',
    gap: '0px',
    opacity: '0px',  
  },
  Ownsaemiro_logo:{
    width: '50.75px',
    height: '56px',
    top: '40px',
    left: '40px',
    gap: '0px',
    opacity: '0px',
  }
});

const Sidebar: React.FC = () => {
  const classes = useStyles();

  return (
    <Box position="relative" maxWidth="330px" width="330vw" bgcolor="#576FD7" height="1130px">
      <List>
        <ImageListItem className={`${classes.Ownsaemiro_logo}`}>
          <img src="./image/logo.png" alt="image"/>
        </ImageListItem>
        <ListItem button className={`${classes.listItem} ${classes.eventListItem}`}>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="행사 등록 요청 목록"/>
        </ListItem>
        <ListItem button className={`${classes.listItem} ${classes.suspendListItem}`}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="사용자 정지 목록"/>
        </ListItem>
        <ListItem button className={`${classes.listItem} ${classes.reportListItem}`}>
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary="사용자 신고 목록"/>
        </ListItem>
        <ListItem className={`${classes.manager_Name}`}>
          <ListItemText primary="관리자 님">
          </ListItemText>
        </ListItem>
        <ListItem button className={`${classes.logout_icon}`}>
          <LogoutIcon />
        </ListItem>
      </List>

    </Box>
  );
};

export default Sidebar;
  