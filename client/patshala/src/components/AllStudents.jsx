import * as React from 'react';
import {useState, useEffect} from 'react';
import { getAllStudents } from '../studentServices';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';



 // All Student
// const columns = [
//   { id: 'name', label: 'Student Name', maxWidth: 170 },
//   { id: 'id', label: 'ID', maxWidth: 50 },
//   {
//     id: 'studentClass',
//     label: 'Class',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'section',
//     label: 'Section',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'email',
//     label: 'Email',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toFixed(2),
//   },
// ];

function createData(name, id, studentClass, section, email) {
  return { name, id, studentClass, section, email };
}

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];

const rows = [];


const AllStudents = () => {

  const [allStudents, setAllStudents] = useState ( [] );

  useEffect ( () => {

    const getStudents = async () => {
      const students = await getAllStudents();

      setAllStudents(students);
      allStudents.forEach((item)=>{
        rows.push(createData(item.studentName, item.studentId, item.clas_s, item.section, item.email));
      });
    }

    getStudents();
    
  }, [])

  const columns = [
    { id: 'name', label: 'Student Name', maxWidth: 170 },
    { id: 'id', label: 'ID', maxWidth: 50 },
    {
      id: 'studentClass',
      label: 'Class',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'section',
      label: 'Section',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'email',
      label: 'Email',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];

 // All Student
 const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  

  // Add Student
  const [gender, setGender] = React.useState('');
  const [classs, setClass] = React.useState('');
  const [section, setSection] = React.useState('');

  const genderChange = (event) => {
    setGender(event.target.value);
  };
  const classChange = (event) => {
    setClass(event.target.value);
  };
  const sectionChange = (event) => {
    setSection(event.target.value);
  };

  return (
    <>
    {/* // Add New Student */}
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div className='formDiv'>
      <TextField
        required
        id="outlined-required"
        label="Student Name"
      />
      <TextField
        id="outlined-read-only-input"
        label="Student ID  "
        defaultValue="Student-ID"
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        required
        id="outlined-required"
        label="E-Mail"
      />
      <TextField
        required
        id="outlined-required"
        label="Phone Number"
      />
      <TextField
        id="outlined-read-only-input"
        label="Password  "
        defaultValue="Password"
        InputProps={{
          readOnly: true,
        }}
      />
      <br></br>
      <FormControl sx={{ minWidth: 150, paddingLeft: 1, paddingRight: 1 }}>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
          onChange={genderChange}
        >
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Other'}>Other</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 150, paddingRight: 1 }}>
        <InputLabel id="demo-simple-select-label">Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
          onChange={genderChange}
        >
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Other'}>Other</MenuItem>
        </Select>
      </FormControl>
      {/* <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="demo-simple-select-label">Section</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
          onChange={genderChange}
        >
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Other'}>Other</MenuItem>
        </Select>
      </FormControl> */}
    
    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Date of Birth" />
      </DemoContainer>
    </LocalizationProvider> */}
      {/* <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Hello World"
      /> */}
      {/* <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      /> */}
      
      {/* <TextField
        id="outlined-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      /> */}
      {/* <TextField id="outlined-search" label="Search fieldd" type="search" /> */}
      {/* <TextField
        id="outlined-helperText"
        label="Helper text"
        defaultValue="Default Value"
        helperText="Some important text"
      /> */}
      <Stack spacing={2} direction="row" sx={{ paddingTop: 4, paddingLeft: 1, paddingBottom: 5}}>
      <Button variant="contained">Save</Button>
      <Button variant="outlined">Reset</Button>
    </Stack>
    </div>
    
    {/* <div>
      <TextField
        required
        id="filled-required"
        label="Required"
        defaultValue="Hello World"
        variant="filled"
      />
      <TextField
        disabled
        id="filled-disabled"
        label="Disabled"
        defaultValue="Hello World"
        variant="filled"
      />
      <TextField
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="filled"
      />
      <TextField
        id="filled-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
      />
      <TextField
        id="filled-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
      />
      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
      />
      <TextField
        id="filled-helperText"
        label="Helper text"
        defaultValue="Default Value"
        helperText="Some important text"
        variant="filled"
      />
    </div> */}
    {/* <div>
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Hello World"
        variant="standard"
      />
      <TextField
        disabled
        id="standard-disabled"
        label="Disabled"
        defaultValue="Hello World"
        variant="standard"
      />
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
      />
      <TextField
        id="standard-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
      />
      <TextField
        id="standard-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="standard"
      />
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        variant="standard"
      />
      <TextField
        id="standard-helperText"
        label="Helper text"
        defaultValue="Default Value"
        helperText="Some important text"
        variant="standard"
      />
    </div> */}
  </Box>
  {/* search Box */}
  <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', marginBottom: 5}}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Student..."
        inputProps={{ 'aria-label': 'Search Student...' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
      </IconButton>
    </Paper>
  {/* All Student */}
  <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
);
}

export default AllStudents