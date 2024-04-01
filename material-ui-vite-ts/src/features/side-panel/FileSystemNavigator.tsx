import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { useBookmarksContext } from '../../BookmarksProvider';
import NodeComponent from '../../components/NodeComponent';
import Node from '../../classes/Node';

const n: chrome.bookmarks.BookmarkTreeNode = {
  title: 'test old',
  id: '5',
  url: 'https://mui.com/x/react-data-grid/accessibility/#keyboard-navigation'
}
const testNode = new Node(n);

export default function FileSystemNavigator() {
  return (
    <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="Applications">
          <NodeComponent node={testNode} />
          <TreeItem nodeId="2" label="Calendar" />
        </TreeItem>
        <TreeItem nodeId="5" label="Documents">
          <TreeItem nodeId="10" label="OSS" />
          <TreeItem nodeId="6" label="MUI">
            <TreeItem nodeId="8" label="index.js" />
          </TreeItem>
        </TreeItem>
      </TreeView>
    </Box>
  );
}