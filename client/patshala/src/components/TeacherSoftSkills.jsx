import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';
import Snackbar from '@mui/material/Snackbar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

//SelectBox
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { getTeacher } from '../teacherServices';
import { getSoftSkillsBySubject , updateSoftSkillsScore } from '../sofSkillsServices'

const useFakeMutation = () => {
  return React.useCallback(
    (user) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (user.name?.trim() === '') {
            reject();
          } else {
            resolve(user);
          }
        }, 200);
      }),
    [],
  );
};

function computeMutation(newRow, oldRow) {
  if (newRow.TeamWork !== oldRow.TeamWork) {
    return `Name from '${oldRow.TeamWork}' to '${newRow.TeamWork}'`;
  }
  if (newRow.Curiosity !== oldRow.Curiosity) {
    return `Name from '${oldRow.Curiosity}' to '${newRow.Curiosity}'`;
  }
  if (newRow.Leadership !== oldRow.Leadership) {
    return `Name from '${oldRow.Leadership}' to '${newRow.Leadership}'`;
  }
  if (newRow.Craetivity !== oldRow.Craetivity) {
    return `Name from '${oldRow.Craetivity}' to '${newRow.Craetivity}'`;
  }
  return null;
}

const TeacherSoftSkills = () => {
    const [section, setSection] = React.useState('');
    const mutateRow = useFakeMutation();
    const noButtonRef = React.useRef(null);
    const [promiseArguments, setPromiseArguments] = React.useState(null);
    const [rows, setRows] = React.useState([]);
    const [softSkillsSubject, setSoftSkillsSubject] = React.useState('')

    function findDifference (newRow, oldRow){
        for (let key of Object.keys (newRow)){
          if (newRow[key] !== oldRow[key]) {
            return key; 
          }
        }
      }

    React.useEffect ( () => {
        getTeacher (localStorage.getItem('user_id'))
        .then((res)=>{
            setSoftSkillsSubject(res.subject)
          return res.subject;
        }).then((res)=>{
    
          getSoftSkillsBySubject(res)
          .then((res)=>{
             setRows(res);
      
          })
        });
    
       
        
        
      }, [])
  
    const [snackbar, setSnackbar] = React.useState(null);
  
    const handleCloseSnackbar = () => setSnackbar(null);
  
    const processRowUpdate = React.useCallback(
      (newRow, oldRow) =>
        new Promise((resolve, reject) => {
          const mutation = computeMutation(newRow, oldRow);
          if (mutation) {
            // Save the arguments to resolve or reject the promise later
            setPromiseArguments({ resolve, reject, newRow, oldRow });
          } else {
            resolve(oldRow); // Nothing was changed
          }
        }),
      [],
    );

    const handleSectionChange = (event) => {
        setSection(event.target.value);
      };
  
    const handleNo = () => {
      const { oldRow, resolve } = promiseArguments;
      resolve(oldRow); // Resolve with the old row to not update the internal state
      setPromiseArguments(null);
    };
  
    const handleYes = async () => {
      const { newRow, oldRow, reject, resolve } = promiseArguments;
  
      try {
        // Make the HTTP request to save in the backend
        // studentId, subject, skill_name, score
        // newRow.id, newRow.subject, 
        const skill_name = findDifference (newRow, oldRow);
        
         await updateSoftSkillsScore(newRow.id, newRow.subject, skill_name, newRow[skill_name]);
        const response = await mutateRow(newRow);
        setSnackbar({ children: 'User successfully saved', severity: 'success' });
        resolve(response);
        setPromiseArguments(null);
      } catch (error) {
        setSnackbar({ children: "Name can't be empty", severity: 'error' });
        reject(oldRow);
        setPromiseArguments(null);
      }
    };
  
    const handleEntered = () => {
      // The `autoFocus` is not used because, if used, the same Enter that saves
      // the cell triggers "No". Instead, we manually focus the "No" button once
      // the dialog is fully open.
      // noButtonRef.current?.focus();
    };
    const renderConfirmDialog = () => {
      if (!promiseArguments) {
        return null;
      }
  
      const { newRow, oldRow } = promiseArguments;
      const mutation = computeMutation(newRow, oldRow);
  
      return (
        <Dialog
          maxWidth="xs"
          TransitionProps={{ onEntered: handleEntered }}
          open={!!promiseArguments}
        >
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogContent dividers>
            {`Pressing 'Yes' will change ${mutation}.`}
          </DialogContent>
          <DialogActions>
            <Button ref={noButtonRef} onClick={handleNo}>
              No
            </Button>
            <Button onClick={handleYes}>Yes</Button>
          </DialogActions>
        </Dialog>
      );
    };
  
    return (
      <>
        <div className='searchnselect'>
    {/* //Searchbar */}

<Paper
component="form"
sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginBottom: 5, marginRight: 3 }}
>
<InputBase
  sx={{ ml: 1, flex: 1 }}
  placeholder="Search Here ...."
  inputProps={{ 'aria-label': 'search Here ....' }}
/>
<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
  <SearchIcon />
</IconButton>

</Paper>

{/* SelectSectionBox */}

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sections</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={section}
          label="Sections"
          onChange={handleSectionChange}
        >
          <MenuItem value={'A'}>A</MenuItem>
          <MenuItem value={'B'}>B</MenuItem>
          <MenuItem value={'C'}>C</MenuItem>
          <MenuItem value={'D'}>D</MenuItem>
          <MenuItem value={'E'}>E</MenuItem>
          <MenuItem value={'F'}>F</MenuItem>
        </Select>
      </FormControl>
    </Box>
  </div>
        {/* Table */}
        <div style={{ height: 400, width: '100%' }}>
        {renderConfirmDialog()}
        <DataGrid rows={rows} columns={columns} processRowUpdate={processRowUpdate} />
        {!!snackbar && (
          <Snackbar open onClose={handleCloseSnackbar} autoHideDuration={6000}>
            <Alert {...snackbar} onClose={handleCloseSnackbar} />
          </Snackbar>
        )}
      </div>
      </>
    );
  }
  
  const columns = [
    { field: 'id', headerName: 'Student-ID', width: 180, editable: false },
    { field: 'section', headerName: 'Section', editable: false },
    {
      field: 'TeamWork',
      headerName: 'Team Work',
      type : 'number',
      editable: true,
      width: 180,
    },
    {
        field: 'Curiosity',
        headerName: 'Curiosity',
        type : 'number',
        editable: true,
        width: 180,
      },
    {
    field: 'Leadership',
    headerName: 'Leadership',
    type : 'number',
    editable: true,
    width: 180,
    },
    {
        field: 'Craetivity',
        headerName: 'Creativity',
        type : 'number',
        editable: true,
        width: 180,
      },
  ];
  
  const rows = [
    {
      id: 1,
      section: 'H',
      TeamWork: 34,
      Curiosity: 345,
      Leadership: 345,
      Creativity: 34,
    },
    {
        id: 3,
        section: 'H',
        TeamWork: 34,
        Curiosity: 345,
        Leadership: 345,
        Creativity: 34,
      },
    
  ];

export default TeacherSoftSkills