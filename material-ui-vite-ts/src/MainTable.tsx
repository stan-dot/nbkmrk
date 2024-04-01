import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useBookmarksContext } from './BookmarksProvider';
import { Menu, MenuItem } from '@mui/material';
import React, { useEffect } from 'react';
import Node from './classes/Node';
import { Bounce, toast } from 'react-toastify';
import { MainTableRow } from './components/NodeComponent';

const urlRegexString = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
const urlRegex = new RegExp(urlRegexString);

const initialRows: MainTableRow[] = [
  { id: 1, url: 'Hello', title: 'World' },
  { id: 2, url: 'DataGridPro', title: 'is Awesome' },
  { id: 3, url: 'MUI', title: 'is Amazing' },
];


const columns: GridColDef[] = [
  { field: 'url', headerName: 'Url', width: 150 },
  { field: 'title', headerName: 'Title', width: 150 },
];

export function MainTable() {
  const [rows, setRows] = React.useState<MainTableRow[]>(initialRows);
  const [selectedRow, setSelectedRow] = React.useState<number>();

  const [contextMenu, setContextMenu] = React.useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setSelectedRow(Number(event.currentTarget.getAttribute('data-id')));
    setContextMenu(
      contextMenu === null
        ? { mouseX: event.clientX - 2, mouseY: event.clientY - 4 }
        : null,
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  const convertToUppercase = () => {
    const newRows = rows.map((row) => {
      if (row.id === selectedRow) {
        return {
          ...row,
          title: row.title.toUpperCase(),
        };
      }
      return row as MainTableRow;
    });
    setRows(newRows);
    handleClose();
  };

  const convertToLowercase = () => {
    const newRows = (rows).map((row) => {
      if (row.id === selectedRow) {
        return {
          ...row,
          title: row.title.toLowerCase(),
        };
      }
      return row;
    });
    setRows(newRows);
    // todo that is for optimistic updates
    handleClose();
  };
  const { bookmarks, deleteBookmark } = useBookmarksContext();

  useEffect(() => {


  }, [])


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={rows}
        slotProps={{
          row: {
            onContextMenu: handleContextMenu,
            style: { cursor: 'context-menu' },
          },
        }}
      />
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        slotProps={{
          root: {
            onContextMenu: (e) => {
              e.preventDefault();
              handleClose();
            },
          },
        }}
      >
        <MenuItem onClick={convertToUppercase}>UPPERCASE</MenuItem>
        <MenuItem onClick={convertToLowercase}>lowercase</MenuItem>
        <MenuItem onClick={() => {
          const ro = rows.find(r => r.id === selectedRow);
          if (ro) {
            if (ro.url.match(urlRegex)) {
              const t: chrome.bookmarks.BookmarkTreeNode = { id: '1', title: ro.title, url: ro.url };
              const n = new Node(t)
              n.open()
            } else {
              toast('not a valid url', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              })
            }
          }
        }}>open</MenuItem>
      </Menu>
    </div >
  );
}

