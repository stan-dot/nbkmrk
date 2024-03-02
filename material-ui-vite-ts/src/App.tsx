import { Box, Container, Stack, Typography } from '@mui/material';
import { Copyright } from './Copyright';
import ProTip from './ProTip';
import FileSystemNavigator from './features/side-panel/FileSystemNavigator';
import SearchAppBar from './features/search/Search';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import ContextMenu from './components/ContextMenu';
import DraggableDialog from './components/DraggableDialog';

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
  return <Container maxWidth="sm">
    <SearchAppBar />
    <Stack direction='row'>

      <FileSystemNavigator />
      <DraggableDialog />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Vite.js example in TypeScript
        </Typography>
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
        <ContextMenu />
      </Box>
    </Stack>
    <footer>
      <ProTip />
      <Copyright />
    </footer>
  </Container>
}
