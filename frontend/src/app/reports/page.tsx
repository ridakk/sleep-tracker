'use client';

import { useState } from 'react';
import Title from '../components/Title';
import RootLayout from '../components/Layout';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import DataTable from '../components/Table';
import BarChart from '../components/BarChart';

export default function Reports() {
  const [selecetedUserName, setSelectedUserName] = useState<string | null>(null);

  const handleRowSelect = (name: string) => {
    setSelectedUserName(name);
  };

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
            <Title>Number of entries submitted per user</Title>
            <DataTable onRowSelect={handleRowSelect} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 'auto',
            }}
          >
            {selecetedUserName && (
              <>
                <Title>Total sleep durations for the last 7 days</Title>
                <BarChart username={selecetedUserName} />
              </>
            )}
            {!selecetedUserName && <Title>Please select a user to see sleep durations for the last 7 days</Title>}
          </Paper>
        </Grid>
      </Grid>
    </RootLayout>
  );
}
