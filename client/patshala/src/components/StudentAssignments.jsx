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

import { getAssignmentByStudent } from '../assignmentServices';

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
  if (newRow.name !== oldRow.name) {
    return `Name from '${oldRow.name}' to '${newRow.name}'`;
  }
  if (newRow.age !== oldRow.age) {
    return `Age from '${oldRow.age || ''}' to '${newRow.age || ''}'`;
  }
  return null;
}
  

const StudentAssignments = () => {
  const mutateRow = useFakeMutation();
  const noButtonRef = React.useRef(null);
  const [promiseArguments, setPromiseArguments] = React.useState(null);
  const [rows, setRows] = React.useState([]);

  const [snackbar, setSnackbar] = React.useState(null);

  React.useEffect ( () => {
    getAssignmentByStudent (localStorage.getItem('user_id'))
    .then((res)=>{
      // setAssignmentSubject(res.subject)
      // return res.subject;
      console.log(res)
      setRows(res);
    })
    // .then((res)=>{

    //   getAssignmentBySection(res)
    //   .then((res)=>{
    //      setRows(res);
  
    //   })
    // });

  
  }, [])





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
    <div style={{ height: 400, width: '100%' }}>
      {renderConfirmDialog()}
      <DataGrid rows={rows} columns={columns} processRowUpdate={processRowUpdate} />
      {!!snackbar && (
        <Snackbar open onClose={handleCloseSnackbar} autoHideDuration={6000}>
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </div>
  );
}

const columns = [
  { field: 'subject', headerName: 'Subject', width: 180, editable: false },
  // { field: 'id', headerName: 'Teacher Name', editable: false, width: 180},
  {
    field: 'assignment1',
    headerName: 'Assignmet1',
    width: 180,
  },
  {
    field: 'assignment2',
    headerName: 'Assignmet2',
    width: 220,
  },
  {
    field: 'assignment3',
    headerName: 'Assignmet3',
    width: 220,
  },
  {
    field: 'assignment4',
    headerName: 'Assignmet4',
    width: 220,
  },
  {
    field: 'assignment5',
    headerName: 'Assignmet5',
    width: 220,
  },
  {
    field: 'assignment6',
    headerName: 'Assignmet6',
    width: 220,
  },
];

// const rows = [
//   {
//     id: 1,
//     subject: randomTraderName(),
//     teacher_name : 'Teacher',
//     assignment1 : 22,
//     assignment2 : 22,
//     assignment3 : 22,
//     assignment4 : 22,
//     assignment5 : 22,
//     assignment6 : 22,
//   },
//   {
//     id: 2,
//     subject: randomTraderName(),
//     teacher_name : 'Teacher',
//     assignment1 : 22,
//     assignment2 : 22,
//     assignment3 : 22,
//     assignment4 : 22,
//     assignment5 : 22,
//     assignment6 : 22,
//   },
//   {
//     id: 3,
//     subject: randomTraderName(),
//     teacher_name : 'Teacher',
//     assignment1 : 22,
//     assignment2 : 22,
//     assignment3 : 22,
//     assignment4 : 22,
//     assignment5 : 22,
//     assignment6 : 22,
//   },
//   {
//     id: 4,
//     subject: randomTraderName(),
//     teacher_name : 'Teacher',
//     assignment1 : 22,
//     assignment2 : 22,
//     assignment3 : 22,
//     assignment4 : 22,
//     assignment5 : 22,
//     assignment6 : 22,
//   },
//   {
//     id: 5,
//     subject: randomTraderName(),
//     teacher_name : 'Teacher',
//     assignment1 : 22,
//     assignment2 : 22,
//     assignment3 : 22,
//     assignment4 : 22,
//     assignment5 : 22,
//     assignment6 : 22,
//   },
// ];

export default StudentAssignments