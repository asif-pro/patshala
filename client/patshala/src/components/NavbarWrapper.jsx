import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import TeacherDashboard from './TeacherDashboard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import StudentDashboard from './StudentDashboard';
import AllStudents from './AllStudents';
import {useNavigate} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
// import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';

export const CookiesContext = React.createContext(null);
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


function NavbarWrapper ({component})  {

  const [cookies, setCookie] = React.useState('');

  React.useEffect(()=>{
    // console.log(Cookies.get('accessToken'))
    setCookie(Cookies.get('accessToken'));
  }, [])
  const user_type = localStorage.getItem('user_type');
  // console.log('usertypr', user_type)

  let navigate = useNavigate ();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <CookiesContext.Provider value={{setCookie}}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {
        cookies &&
        <>
        <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {/* Teacher Dashboard */}
          </Typography>
        </Toolbar>
      </AppBar>
        </>
      }
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        { 
          cookies &&
          <>
          {/* teacher_navbar */}
          { user_type == 2 &&
          <List>
          {[{label:'Dashboard', route: '/teacher_dashboard'}, {label:'Students', route: '/allstudents'}, {label:'Sections', route: '/all_sections'}, {label:'Assignments', route: '/teacher_assignments'}, {label:'Appointments', route: '/teacher_appointments'}, {label:'Attendance', route: '/attendance'}, {label:'Soft Skills', route: '/teacher_soft_skills'}, {label:'Notices', route: '/notices'}, {label:'Log-Out', route: '/'}].map((item, index) => (
            <ListItem key={item.label} disablePadding sx={{ display: 'block' }} >
              <ListItemButton onClick={()=>{
                navigate(item.route);
              }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   
                   {index === 0 ? <DashboardIcon /> : ''}
                   {index === 1 ? <PeopleAltOutlinedIcon/> : ''}
                   {index === 2 ? <MeetingRoomOutlinedIcon/> : ''}
                   {index === 3 ? <DescriptionOutlinedIcon/> : ''}
                   {index === 4 ? <VideoCameraFrontOutlinedIcon/> : ''}
                   {index === 5 ? <InventoryOutlinedIcon/> : ''}
                   {index === 6 ? <WebhookOutlinedIcon/> : ''}
                   {index === 7 ? <ContentPasteSearchOutlinedIcon/> : ''}
                   {index === 8 ? <LogoutIcon onClick={ ()=>{
                    localStorage.clear();
                    Cookies.remove('accessToken');
                   }} /> : ''}
                </ListItemIcon>
                <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <Divider />
            </ListItem>
            
          ))}
          </List>}
          {/* student_navbar */}
          { user_type == 3 &&
          <List>
          {[{label:'Dashboard', route: '/student_dashboard'}, {label:'Assignments', route: '/student_assignments'}, {label:'Appointments', route: '/student_appointments'}, {label:'Log-Out', route: '/'}].map((item, index) => (
            <ListItem key={item.label} disablePadding sx={{ display: 'block' }} >
              <ListItemButton onClick={()=>{
                navigate(item.route);
              }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                   
                   {index === 0 ? <DashboardIcon /> : ''}
                   {index === 1 ? <DescriptionOutlinedIcon/> : ''}
                   {index === 2 ? <VideoCameraFrontOutlinedIcon/> : ''}
                   {index === 3 ? <LogoutIcon onClick={ ()=>{
                    localStorage.clear();
                    Cookies.remove('accessToken');
                   }}/> : ''}
                </ListItemIcon>
                <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <Divider />
            </ListItem>
            
          ))}
          </List>}
          </>
          
        }
        
        {/* <List>
          {['Attandance', 'Soft Skills', 'Notices'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <>
        {component}
        </>
        {/* <TeacherDashboard/> */}
        {/* <StudentDashboard/> */}
      </Box>
    </Box>
    </CookiesContext.Provider>
  );
}

export default NavbarWrapper