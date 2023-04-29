import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import { InlineWidget } from "react-calendly";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import imagess from './images/contemplative.jpg'

import MeetingCard from "./MeetingCard";

const StudentAppointment = () => {

    // useCalendlyEventListener({
    //     onProfilePageViewed: () => console.log("onProfilePageViewed"),
    //     onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    //     onEventTypeViewed: () => console.log("onEventTypeViewed"),
    //     onEventScheduled: (e) => console.log(e.data.payload),
    //   });

    return (
        // <div className="App">
        //   <InlineWidget url="https://calendly.com/asifiner/patshala-meeting" />
        // </div>
        <>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '20vw',
          height: '50vh',
          marginLeft: 17,
          paddingTop: 5,
          paddingLeft: 10,
          marginBottom: 5
        },
      }}
    >
      
      <Paper elevation={0}> <MeetingCard subject={'Math'} imge={'https://res.cloudinary.com/dru7kzv3i/image/upload/v1682749697/math_vto9zy.png'}></MeetingCard></Paper>
      <Paper elevation={0}> <MeetingCard subject={'Art'} imge={'https://res.cloudinary.com/dru7kzv3i/image/upload/v1682749546/_edited_h6250i.jpg'}> </MeetingCard></Paper>
      <Paper elevation={0}> <MeetingCard subject={'Music'} imge={'https://res.cloudinary.com/dru7kzv3i/image/upload/v1682749545/unnamed_dduh5d.jpg'}> </MeetingCard></Paper>
      <Paper elevation={0}> <MeetingCard subject={'Language'} imge={'https://res.cloudinary.com/dru7kzv3i/image/upload/v1682749546/how-to-learn-a-language-like-a-hyper-polyglot_jfrdp2.jpg'}> </MeetingCard></Paper>
      <Paper elevation={0}> <MeetingCard subject={'History'} imge={'https://res.cloudinary.com/dru7kzv3i/image/upload/v1682749546/History_ykd9gh.jpg'}> </MeetingCard></Paper>
      <Paper elevation={0}> <MeetingCard subject={'Science'} imge={'https://res.cloudinary.com/dru7kzv3i/image/upload/v1682749546/science_w2frt7.jpg'}></MeetingCard></Paper>
    </Box>
        
        {/* <MeetingCard subject={'Science'}></MeetingCard>
        <MeetingCard subject={'History'}></MeetingCard>
        <MeetingCard subject={'Music'}></MeetingCard>
        <MeetingCard subject={'Language'}></MeetingCard>
        <MeetingCard subject={'Art'}></MeetingCard> */}
        </>
        
      );
}

export default StudentAppointment