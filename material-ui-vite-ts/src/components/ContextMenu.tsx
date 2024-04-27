import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import Node from '../classes/Node';
import DeleteDialog from './DeleteDialog';
import DraggableDialog from './DraggableDialog';
import { useBookmarksContext } from '../BookmarksProvider';

type ContextMenuProps = {
  children: React.ReactNode
  node: Node
}

export default function ContextMenu({ children, node }: ContextMenuProps) {
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);
  const { deleteBookmark } = useBookmarksContext();

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
          mouseX: event.clientX + 2,
          mouseY: event.clientY - 6,
        }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
        // Other native context menus might behave different.
        // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
        null,
    );
  };

  const handleClose = () => {
    setTimeout(() => {
      setContextMenu(null);
    }, 3000);
  };

  useEffect(() => {
    setTimeout(() => {
      setContextMenu(null)
    }, 4000);

  }, [])


  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}>
      {children}
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleClose}>
          Close
        </MenuItem>
        <MenuItem onClick={async () => {
          node.open();
          handleClose()
        }}
        >
          Open
        </MenuItem>
        <MenuItem onClick={async () => {
          node.openPrivate();
          handleClose()
        }}
        >
          Open incognito
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DeleteDialog callback={() => deleteBookmark(node.object.id, () => window.alert('ready'))} />
        </MenuItem>

      </Menu>
    </div>
  );
}