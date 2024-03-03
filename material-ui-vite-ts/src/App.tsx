import { Container, Grid, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import SearchAppBar from './features/search/SearchAppBar';
import FileSystemNavigator from './features/side-panel/FileSystemNavigator';
import { useEffect, useState } from 'react';

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

export default function App() {


  const urlSearchString = window.location.search;
  const [readPath, setReadPath] = useState<string>("")

  // alert(`pathname: ${window.location.pathname}`)
  const params = new URLSearchParams(urlSearchString);
  console.log('search params: ', params);
  useEffect(() => {
    const path = window.location.pathname;
    console.log('pathname: ', path)
    setReadPath(path)
    const urlSearchString = window.location.search;
    const params = new URLSearchParams(urlSearchString);
    console.log('search params: ', params);
  }, []);

  return <Container maxWidth="xl">
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SearchAppBar />
        <div id="pathBar">
          {readPath}
        </div>
      </Grid>
      <Grid item xs={2}>
        <FileSystemNavigator />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Bookmarks data grid
        </Typography>
        <DataGrid rows={rows} columns={columns} />
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  </Container>
}
