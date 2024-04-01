import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useBookmarksContext } from './BookmarksProvider';


const rows: GridRowsProp = [
  { id: 1, url: 'Hello', title: 'World' },
  { id: 2, url: 'DataGridPro', title: 'is Awesome' },
  { id: 3, url: 'MUI', title: 'is Amazing' },
];
const columns: GridColDef[] = [
  { field: 'url', headerName: 'Url', width: 150 },
  { field: 'title', headerName: 'Title', width: 150 },
];

export function MainTable() {
  // const { bookmarks } = useBookmarksContext();
  return <DataGrid rows={rows} columns={columns} rowSelection />;
}
