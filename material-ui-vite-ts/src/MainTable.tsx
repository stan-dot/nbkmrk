import { Menu, MenuItem } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React from 'react';
import { Bounce, toast } from 'react-toastify';
import { useAppStateContext } from './StateProvider';
import Node from './classes/Node';

const urlRegexString = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
const urlRegex = new RegExp(urlRegexString);

const columns: GridColDef<Node>[] = [
  { field: 'url', headerName: 'Url', width: 150, valueGetter: (params) => params.row.object.url ?? 'folder' },
  { field: 'title', headerName: 'Title', width: 150, valueGetter: (params) => params.row.object.title },
];

type MainTableProps = {
}

export function MainTable({ }: MainTableProps) {
  const [{ bookmarksDisplay }, dispatch] = useAppStateContext();

  const [selectedRow, setSelectedRow] = React.useState<number>(0);

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

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={bookmarksDisplay}

        getRowId={(row: Node) => row.object.id}
        onRowDoubleClick={(params) => {
          const node: Node = params.row;
          window.alert(`should change path, includign: ${node.object.title}`)
        }}
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
        <MenuItem onClick={() => {
          const ro = bookmarksDisplay.at(selectedRow!);
          if (ro) {
            if (ro.object && ro.object.url && ro.object.url.match(urlRegex)) {
              const t: chrome.bookmarks.BookmarkTreeNode = { id: '1', title: ro.object.title, url: ro.object.url };
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

