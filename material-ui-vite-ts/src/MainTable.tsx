import { Menu, MenuItem } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { useBookmarksContext } from './BookmarksProvider';
import { displayNewChildren, useAppStateContext } from './StateProvider';
import Node from './classes/Node';
import { useClipboard } from './features/clipboard/ClipboardProvider';
import { MockBookmarkTreeNode } from './classes/mockdata';
import { toast } from 'react-toastify';
import GenericDialog from './components/GenericDialog';

const urlRegexString = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
const urlRegex = new RegExp(urlRegexString);

const getAllBookmarkUrls = (bookmarks: MockBookmarkTreeNode[]) => {
  return bookmarks.map(bookmark => bookmark.url).join('\n');
};

const copyUrlsToClipboard = async (urls: string) => {
  try {
    await navigator.clipboard.writeText(urls);
    console.log('URLs copied to clipboard!');
  } catch (error) {
    console.error('Failed to copy URLs to clipboard:', error);
  }
};


const columns: GridColDef<Node>[] = [
  {
    field: 'url', headerName: 'Url', width: 150, valueGetter: (params) => {
      // console.log('params: ', params);
      return params.row.isFolder ? 'folder' : params.row.object.url
    }
  },
  { field: 'title', headerName: 'Title', width: 450, valueGetter: (params) => params.row.object.title },
];

type MainTableProps = {}


export function MainTable({ }: MainTableProps) {
  const [{ bookmarksDisplay, path, searchParams }, dispatch] = useAppStateContext();
  const { deleteBookmark, addBookmark } = useBookmarksContext();

  const [selectedRows, setSelectedRows] = React.useState<number[]>([0]);

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
    setSelectedRows([i]);
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
  const { clipboard, copyToClipboard } = useClipboard();

  const handlePaste = async (e: React.ClipboardEvent<HTMLDivElement>): Promise<void> => {
    e.preventDefault();
    if (clipboard.length === 0) {

      const clipboardContents = await navigator.clipboard.read();
      if (clipboardContents.length === 0) {
        window.alert('no links here');
        return;
      }
      for (const item of clipboardContents) {
        console.log(' item: ', item);
        const url: string | undefined = (item as unknown as Record<string, string>)['url'];
        if (url) {
          const a: chrome.bookmarks.BookmarkCreateArg = {
            title: url,
            url: url,
            parentId: path.at(-1)?.object.id
          };
          await addBookmark(a);
        }
      }
      return;
    }
    // here for the branch where using the clipboard provider
    clipboard.forEach(c => {
      // todo move to the current location
      const ma: chrome.bookmarks.BookmarkMoveInfo = {
        index: 0,
        oldIndex: 0,
        parentId: '',
        oldParentId: ''
      };
      console.log(c, ma);


    });


  };
  return (
    <div style={{ height: '80%', width: '100%' }} onPaste={handlePaste}>
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
        <MenuItem onClick={() => { }}>Open
          <GenericDialog buttonText={'Open'} title={'Open many bookmarks'} callback={() => {
            if (contextMenu && contextMenu.node) {
              const n = contextMenu.node;
              console.log('node ', n)
              n.open();
            }
          }} submitButtonLabel={'Yes, open'} />
        </MenuItem>
        <MenuItem onClick={async () => {
          if (contextMenu && contextMenu.node) {
            const n = contextMenu.node;
            n.open();
            await deleteBookmark(n.object.id, () => { });
          }
          contextMenu?.node?.open()
        }}>
          Delete
        </MenuItem>
        <MenuItem onClick={async (e) => {
          if (clipboard && clipboard.length > 0) {
            console.log('doing the urls from ', clipboard);
            const urls = getAllBookmarkUrls(clipboard.map(n => n.object));
            await copyUrlsToClipboard(urls);
            window.alert(`urls copied: ${urls}`);
          } else {
            toast('No bookmarks to copy');
          }
          // NOTE local copy
          const ns: Node[] = bookmarksDisplay.filter((x, i) => selectedRows.includes(i));
          console.log('doing the urls from the selected stuffs ', ns);
          const urls = getAllBookmarkUrls(ns.map(n => n.object));
          await copyUrlsToClipboard(urls);
          window.alert(`urls copied: ${urls}`);
          copyToClipboard(ns);
          toast(`copied ${ns.length} elements`);
          handleClose();
        }}>
          Copy
        </MenuItem>
        <MenuItem onClick={(e) => {
          const ns: Node[] = bookmarksDisplay.filter((x, i) => selectedRows.includes(i));
          copyToClipboard(ns);
          ns.forEach(n => deleteBookmark(n.object.id, () => { }))
          handleClose();
        }}>
          Cut
        </MenuItem>
      </Menu>
    </div >
  );
}
