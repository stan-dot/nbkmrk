import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { useBookmarksContext } from './BookmarksProvider';
import { Menu, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Node, { MainTableRow } from './classes/Node';
import { Bounce, toast } from 'react-toastify';

const urlRegexString = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
const urlRegex = new RegExp(urlRegexString);

const initialRows: MainTableRow[] = [
  { id: 1, url: 'https://mui.com/x/react-data-grid/components/#row', title: 'mui grid' },
  { id: 2, url: 'https://en.wikipedia.org/wiki/Domesticated_silver_fox', title: 'domesticated fox' },
  { id: 3, url: 'https://gun.eco/', title: 'gun.js' },
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
    const n = Number(event.currentTarget.getAttribute('data-id'));
    setSelectedRow(n);
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
  const { bookmarks, fetchBookmarks } = useBookmarksContext();

  const [newBookmarks, setNewBookmarks] = useState<MainTableRow[]>([])
  useEffect(() => {
    const fetchData = async () => {
      await fetchBookmarks();
      // const finalRows = data.map(b => b.intoRow());
      // setNewBookmarks(finalRows);
    }
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

