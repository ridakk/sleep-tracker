import { useState, MouseEvent, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useFetch from '../hooks/useFetch';
import Alert from '@mui/material/Alert';
import Skeleton from '@mui/material/Skeleton';

export default function BasicTable({
  onRowSelect,
}: {
  // eslint-disable-next-line no-unused-vars
  onRowSelect: (name: string) => void;
}) {
  const [loading, rows, error] = useFetch<{ name: string; gender: string; count: number }>('/v1/reports/counts');
  const [selected, setSelected] = useState<string>('');
  const [showSkeleton, setShowSkeleton] = useState(true);

  const handleClick = (event: MouseEvent<unknown>, name: string) => {
    setSelected(name);
    onRowSelect(name);
  };

  const isSelected = (name: string) => selected === name;

  useEffect(() => {
    if (!loading && (rows || []).length > 0) {
      setTimeout(() => {
        setShowSkeleton(false);
      }, 1000);
    }
  }, [loading, rows]);

  return (
    <>
      {error && <Alert severity="error">{error.details}</Alert>}
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow hover>
              <TableCell>Name</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rows || []).map((row) => {
              const isItemSelected = isSelected(row.name);

              return (
                <>
                  {showSkeleton &&
                    [0, 1, 2, 3].map((row, index) => {
                      return (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component="th" scope="row">
                            <Skeleton animation="wave" variant="text" />
                          </TableCell>
                          <TableCell>
                            <Skeleton animation="wave" variant="text" />
                          </TableCell>
                          <TableCell>
                            <Skeleton animation="wave" variant="text" />
                          </TableCell>
                        </TableRow>
                      );
                    })}

                  {!showSkeleton && (
                    <TableRow
                      key={row.name}
                      onClick={(event) => handleClick(event, row.name)}
                      aria-checked={isItemSelected}
                      selected={isItemSelected}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.gender}</TableCell>
                      <TableCell align="right">{row.count}</TableCell>
                    </TableRow>
                  )}
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
