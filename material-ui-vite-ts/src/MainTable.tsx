import { Menu, MenuItem } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { Bounce, toast } from 'react-toastify';
import { displayNewChildren, useAppStateContext } from './StateProvider';
import Node from './classes/Node';
import { useBookmarksContext } from './BookmarksProvider';

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
  const { deleteBookmark } = useBookmarksContext();

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
    node: Node | undefined;
  } | null>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    const i = Number(event.currentTarget.getAttribute('data-id'));
    setSelectedRow(i);
    const node = bookmarksDisplay[i]
    console.log(' context menu in n: ', i)
    setContextMenu(
      contextMenu === null
        ? { mouseX: event.clientX - 2, mouseY: event.clientY - 4, node }
        : null,
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <div style={{ height: '80%', width: '100%' }}>
      <DataGrid
        sx={{ minHeight: '80%' }}
        columns={columns}
        rows={bookmarksDisplay}
        getRowId={(row: Node) => row.object.id}
        onRowDoubleClick={async (params) => {
          const node: Node = params.row;
          dispatch({ type: 'NAVIGATE', payload: node })
          await displayNewChildren(node, dispatch)
        }}
        slotProps={{
          toolbar: GridToolbar,
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
          if (contextMenu && contextMenu.node) {
            const n = contextMenu.node;
            n.open();
          }
          contextMenu?.node?.open()
        }}>Open</MenuItem>
        <MenuItem onClick={async () => {
          if (contextMenu && contextMenu.node) {
            const n = contextMenu.node;
            n.open();
            await deleteBookmark(n.object.id, () => { });
          }
          contextMenu?.node?.open()
        }}>Delete</MenuItem>
      </Menu>
    </div >
  );
}

