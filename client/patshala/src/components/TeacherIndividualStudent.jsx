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
import MenuBookIcon from '@mui/icons-material/MenuBook';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import RadarChart from './RdarChart';
import ProgressBar from './ProgressBar';

Chart.register(CategoryScale);

const TeacherIndividualStudent = () => {

  const [mathScore, setMathScore] = React.useState(0);
  const [scienceScore, setScienceScore] = React.useState(0);
  const [historyScore, setHistoryScore] = React.useState(0);
  const [languageScore, setLanguageScore] = React.useState(0);
  const [artScore, setArtScore] = React.useState(0);
  const [musicScore, setMusicScore] = React.useState(0);

  const [assignment1, setAssignment1] = React.useState(0);
  const [assignment2, setAssignment2] = React.useState(0);
  const [assignment3, setAssignment3] = React.useState(0);
  const [assignment4, setAssignment4] = React.useState(0);
  const [assignment5, setAssignment5] = React.useState(0);
  const [assignment6, setAssignment6] = React.useState(0);

  React.useEffect(() => {
    setMathScore(75);
    setScienceScore(85);
    setHistoryScore(65);
    setLanguageScore(70);
    setArtScore(88);
    setMusicScore(92);

    setAssignment1(58)
    setAssignment2(86)
    setAssignment3(76)
    setAssignment4(-1)
    setAssignment5(-1)
    setAssignment6(-1)
}, [])



return (
  <>
  <div><Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: '23vw',
        height: '60vh',
        marginLeft: 17,
        padding : 1,
        marginBottom: 5,
        paddingBottom: 10
      },
    }}
  >
    <Paper elevation={3} >
      <h2 className='subjectScoreHeading'>All Subject Score</h2>
      <ProgressBar score={mathScore} subjectName={'Math'}></ProgressBar>
      <ProgressBar score={scienceScore} subjectName={'Science'}></ProgressBar>
      <ProgressBar score={historyScore} subjectName={'History'}></ProgressBar>
      <ProgressBar score={languageScore} subjectName={'Language'}></ProgressBar>
      <ProgressBar score={artScore} subjectName={'Art'}></ProgressBar>
      <ProgressBar score={musicScore} subjectName={'Music'}></ProgressBar>
    </Paper>
    <Paper elevation={3} ><RadarChart></RadarChart></Paper>
    <Paper elevation={3} >
      <h2 className='subjectScoreHeading'>This Subject Score</h2>
      <ProgressBar score={assignment1} subjectName={'Assignment-1'}></ProgressBar>
      <ProgressBar score={assignment2} subjectName={'Assignment-2'}></ProgressBar>
      <ProgressBar score={assignment3} subjectName={'Assignment-3'}></ProgressBar>
      <ProgressBar score={assignment4} subjectName={'Assignment-4'}></ProgressBar>
      <ProgressBar score={assignment5} subjectName={'Assignment-5'}></ProgressBar>
      <ProgressBar score={assignment6} subjectName={'Assignment-6'}></ProgressBar>
    </Paper>
  </Box></div>
  {/* <div><Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: '23vw',
        height: '40vh',
        marginLeft: 17
      },
    }}
  >
    <Paper elevation={3}><h2 className='cardHeader'>Attandance by Subject</h2>
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
          <InventoryOutlinedIcon/>
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Biology" secondary="100%" />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <InventoryOutlinedIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="History" secondary="70%" />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <InventoryOutlinedIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Math" secondary="92%" />
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <InventoryOutlinedIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Physics" secondary="86%" />
    </ListItem>
    
  </List></Paper>
    <Paper elevation={3}><h2 className='cardHeader'></h2>
      </Paper>
    <Paper elevation={3}><h2 className='cardHeader'></h2></Paper>
  </Box></div> */}
  </>
)
}

export default TeacherIndividualStudent