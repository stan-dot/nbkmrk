import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { useBookmarksContext } from '../../BookmarksProvider';
import NodeComponent from '../../components/NodeComponent';
import { Typography } from '@mui/material';
import { useAppStateContext } from '../../StateProvider';

export default function FileSystemNavigator() {
  const [{ bookmarkTree, path }, dispatch] = useAppStateContext();
  return (
    <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
      {/* <Typography>{path}</Typography> */}
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {bookmarkTree.map((b, i) => <NodeComponent node={b} />)}
      </TreeView>
    </Box>
  );
}