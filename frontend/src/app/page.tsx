import * as React from 'react';
import RootLayout from './components/Layout';
import Title from './components/Title';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Dashboard() {
  return (
    <RootLayout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Title>Form</Title>
          </Paper>
        </Grid>
      </Grid>
    </RootLayout>
  );
}
