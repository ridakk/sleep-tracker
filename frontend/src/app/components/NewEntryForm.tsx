'use client';

import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { useState, ChangeEvent, useEffect } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function NewEntryForm() {
  const [name, setName] = useState('');
  const [gender, getGender] = useState('');
  const [duration, setDuration] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value.toLowerCase());
  };

  const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    getGender(event.target.value.toLowerCase());
  };

  const handleDurationChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (newValue < 0) {
      setDuration(0);
    } else if (newValue > 24) {
      setDuration(24);
    } else {
      setDuration(newValue);
    }
  };

  const handleSave = async () => {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:8000/v1/sleeps`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, gender, duration }),
      });
      const data = await res.json();
      setLoading(false);

      if (res.status > 200) {
        setError(data.details);
        return;
      }
    } catch (error) {
      setError('Request failed, please try again later');
      setLoading(false);
      return;
    }
  };

  useEffect(() => {
    if (name.trim().length < 3 || gender === '') {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [name, gender]);

  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="name" required>
          Name
        </FormLabel>
        <TextField
          id="name"
          name="name"
          value={name}
          placeholder="john wick"
          autoComplete="name"
          required
          helperText="min 3 chars, all lowercase"
          onChange={handleNameChange}
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="gender" required>
          Gender
        </FormLabel>
        <TextField
          id="gender"
          name="gender"
          value={gender}
          placeholder=""
          autoComplete="gender"
          required
          helperText="min 1 char, all lowercase"
          onChange={handleGenderChange}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="duration" required>
          Duration
        </FormLabel>
        <TextField
          id="outlined-number"
          type="number"
          value={duration}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: <InputAdornment position="end">hours</InputAdornment>,
          }}
          placeholder="8"
          helperText="Enter sleep duration for current day, min: 0 max: 24"
          onChange={handleDurationChange}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <LoadingButton
          disabled={disabled}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          color="success"
          onClick={handleSave}
        >
          Save
        </LoadingButton>
      </FormGrid>
      {error && (
        <FormGrid item xs={12}>
          <Alert severity="error">{error}</Alert>
        </FormGrid>
      )}
    </Grid>
  );
}
