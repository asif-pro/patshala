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

//Searchbar
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
  // if (newRow.name !== oldRow.name) {
  //   return `Name from '${oldRow.name}' to '${newRow.name}'`;
  // }
  if (newRow.assignment1 !== oldRow.assignment1) {
    return `Assignment Marks from '${oldRow.assignment1 || ''}' to '${newRow.assignment1 || ''}'`;
  }
  if (newRow.assignment2 !== oldRow.assignment2) {
    return `Assignment Marks from '${oldRow.assignment2 || ''}' to '${newRow.assignment2 || ''}'`;
  }
  if (newRow.assignment3 !== oldRow.assignment3) {
    return `Assignment Marks from '${oldRow.assignment3 || ''}' to '${newRow.assignment3 || ''}'`;
  }
  if (newRow.assignment4 !== oldRow.assignment4) {
    return `Assignment Marks from '${oldRow.assignment4 || ''}' to '${newRow.assignment4 || ''}'`;
  }
  if (newRow.assignment5 !== oldRow.assignment5) {
    return `Assignment Marks from '${oldRow.assignment5 || ''}' to '${newRow.assignment5 || ''}'`;
  }
  if (newRow.assignment6 !== oldRow.assignment6) {
    return `Assignment Marks from '${oldRow.assignment6 || ''}' to '${newRow.assignment6 || ''}'`;
  }
  return null;
}

const TeacherAssignment = () => {
  //Section SelectBox
  const [section, setSection] = React.useState('');

  const handleSectionChange = (event) => {
    setSection(event.target.value);
  };


  //Table
    const mutateRow = useFakeMutation();
    const noButtonRef = React.useRef(null);
    const [promiseArguments, setPromiseArguments] = React.useState(null);
  
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
  
    const handleNo = () => {
      const { oldRow, resolve } = promiseArguments;
      resolve(oldRow); // Resolve with the old row to not update the internal state
      setPromiseArguments(null);
    };
  
    const handleYes = async () => {
      const { newRow, oldRow, reject, resolve } = promiseArguments;
  
      try {
        // Make the HTTP request to save in the backend
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
    { field: 'name', headerName: 'Student Name', width: 180, editable: false},
    
    { field: 'id', headerName: 'Student-ID'},
    { field: 'section', headerName: 'Section', editable: false },
    // {
    //   field: 'lastLogin',
    //   headerName: 'Submission Date',
    //   // type: 'dateTime',
    //   width: 150,
    //   editable: true
    // },

    {
      field: 'assignment1',
      headerName: 'Assignment-1',
      type: 'number',
      width: 120,
      editable: true
    },
    {
      field: 'assignment2',
      headerName: 'Assignment-2',
      type: 'number',
      width: 120,
      editable: true
    },
    {
      field: 'assignment3',
      headerName: 'Assignment-3',
      type: 'number',
      width: 120,
      editable: true
    },
    {
      field: 'assignment4',
      headerName: 'Assignment-4',
      type: 'number',
      width: 120,
      editable: true
    },
    {
      field: 'assignment5',
      headerName: 'Assignment-5',
      type: 'number',
      width: 120,
      editable: true
    },
    {
      field: 'assignment6',
      headerName: 'Assignment-6',
      type: 'number',
      width: 120,
      editable: true
    },
  ];
  
  const rows = [
    {
      id: 'S-435-435',
      name: randomTraderName(),
      section: "A",
      assignment1:'0',
      assignment2:'0',
      assignment3:'0',
      assignment4:'0',
      assignment5:'0',
      assignment6:'0',
    },
    {
      id: "S-75-634",
      name: randomTraderName(),
      section: 'B',
      assignment1:'0',
      assignment2:'0',
      assignment3:'0',
      assignment4:'0',
      assignment5:'0',
      assignment6:'0',
    },
    {
      id: "S-45-634",
      name: randomTraderName(),
      section: "C",
      assignment1:'0',
      assignment2:'0',
      assignment3:'0',
      assignment4:'0',
      assignment5:'0',
      assignment6:'0',
    },
    {
      id: "S-715-611",
      name: randomTraderName(),
      section: 'D',
      assignment1:'0',
      assignment2:'0',
      assignment3:'0',
      assignment4:'0',
      assignment5:'0',
      assignment6:'0',
    },
    {
      id: "S-94-034",
      name: randomTraderName(),
      section: 'E',
      assignment1:'0',
      assignment2:'0',
      assignment3:'0',
      assignment4:'0',
      assignment5:'0',
      assignment6:'0',
    },
  ];

export default TeacherAssignment