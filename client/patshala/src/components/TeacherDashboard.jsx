// rafce
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';


Chart.register(CategoryScale);

const TeacherDashboard = () => {




  return (
    <>
    <div><Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '20vw',
          height: '40vh',
          marginLeft: 17
        },
      }}
    >
      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
    </Box></div>
    <div><Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '20vw',
          height: '40vh',
          marginLeft: 17
        },
      }}
    >
      <Paper elevation={3}><h2 className='cardHeader'>Next Appointments</h2>
        <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <VideoCameraFrontOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="John Petrucci" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <VideoCameraFrontOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Synyster Gates" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <VideoCameraFrontOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Myles Kennedy" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <VideoCameraFrontOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mark Tremonti" secondary="July 20, 2014" />
      </ListItem>
      
    </List></Paper>
    <Paper elevation={3}><h2 className='cardHeader'>Upcoming Classes</h2>
        <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            < MenuBookIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Section-D" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MenuBookIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Section-C" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MenuBookIcon  />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Section-A" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MenuBookIcon  />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Section-D" secondary="July 20, 2014" />
      </ListItem>
      
    </List></Paper>
      <Paper elevation={3} sx={{
        margin: '1 rem'
      }}><h2 className='cardHeader'>Notice Board</h2>
        <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ContentPasteSearchIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Science Olympic" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ContentPasteSearchIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Summer Holiday" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ContentPasteSearchIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Sports Day" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ContentPasteSearchIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Campus Rules" secondary="July 20, 2014" />
      </ListItem>
      
    </List></Paper>
    </Box></div>
    {/* <div className='topBar'>TeacherDashboard</div> */}
    {/* <div className='container'>
      <div className='sidebar'>Sidebar
        <div>Page1</div>
        <div>Page2</div>
        <div>Page3</div>
        <div>Page4</div>
        <div>Page5</div>
      </div>
      <div className='dashboard'>Dashboard
        <div className='dashupper'>
          <div className='upperone'>Chart 1dfgdfgdgdgdf</div>
          <div className='uppertwo'>Chart 2</div>
          <div className='upperthree'>Chart 3</div>
        </div>
        <div className='dashlower'>
        <div className='lowerone'>Chart 1dfgdfgdgdgdf</div>
          <div className='lowertwo'>Chart 2</div>
          <div className='lowerthree'>Chart 3</div>
        </div>
      </div>
    </div> */}
    </>
  )
}

export default TeacherDashboard