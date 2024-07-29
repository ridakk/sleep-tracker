import * as React from 'react';
import RootLayout from './components/Layout';
import Title from './components/Title';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import NewEntryForm from './components/NewEntryForm';

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
              height: 'auto',
            }}
          >
            <Title>Enter new sleep data</Title>
            <NewEntryForm />
          </Paper>
        </Grid>
      </Grid>
    </RootLayout>
  );
}
