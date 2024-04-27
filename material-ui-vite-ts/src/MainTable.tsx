import { Menu, MenuItem } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { Bounce, toast } from 'react-toastify';
import { displayNewChildren, useAppStateContext } from './StateProvider';
import Node from './classes/Node';

const urlRegexString = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
const urlRegex = new RegExp(urlRegexString);

const columns: GridColDef<Node>[] = [
  {
    field: 'url', headerName: 'Url', width: 150, valueGetter: (params) => {
      console.log('params: ', params);
      return params.row.isFolder ? 'folder' : params.row.object.url
    }
  },
  { field: 'title', headerName: 'Title', width: 450, valueGetter: (params) => params.row.object.title },
];

type MainTableProps = {
}

export function MainTable({ }: MainTableProps) {
  const [{ bookmarksDisplay, path, searchParams }, dispatch] = useAppStateContext();

  const [selectedRow, setSelectedRow] = React.useState<number>(0);

  useEffect(() => {
    const lastNode = path.at(-1);
    if (lastNode) {
      displayNewChildren(lastNode, dispatch)
    }
  }, [path])

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
    <div style={{ height: '80%', width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={bookmarksDisplay}

        getRowId={(row: Node) => row.object.id}
        onRowDoubleClick={async (params) => {
          const node: Node = params.row;
          dispatch({ type: 'NAVIGATE', payload: node })
          await displayNewChildren(node, dispatch)
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
            ro.open()
            if (ro.object && ro.object.url && ro.object.url.match(urlRegex)) {
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

