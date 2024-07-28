import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';

const LeftMenuItems = (
  <>
    <ListItemButton href="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="New Entry" />
    </ListItemButton>
    <ListItemButton href="/reports">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
  </>
);

export default LeftMenuItems;
