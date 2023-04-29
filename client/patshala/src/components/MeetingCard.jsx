import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import Math from './images/math.jpg'

const MeetingCard = ({subject, imge}) => {

    let navigate = useNavigate ();
  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imge}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {subject}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Click Below To Schedule a Meeting with respected course Teacher
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{navigate('/calendly')}}>
          Schedule Meeting
        </Button>
      </CardActions>
    </Card>



    
  )
}

export default MeetingCard