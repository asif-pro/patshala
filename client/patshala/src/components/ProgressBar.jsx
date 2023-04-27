import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const ProgressBar = ({score, subjectName}) => {
    // const [progress, setProgress] = React.useState(0);
    // const [subject, setSubject] = React.useState('');

    // React.useEffect(() => {
    //     console.log(score)
    //     console.log(subjectName)
    //     setProgress(score);
    //     setSubject(subjectName);
    // }, [])

    // React.useEffect(() => {
    //   const timer = setInterval(() => {
    //     setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    //   }, 800);
    //   return () => {
    //     clearInterval(timer);
    //   };
    // }, []);
  
    return (
      <Box sx={{ width: '100%' }}>
        <span>{subjectName}</span>
        <LinearProgressWithLabel value={score} />
      </Box>
    );
}

export default ProgressBar