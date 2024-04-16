import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { useBookmarksContext } from '../../BookmarksProvider';
import NodeComponent from '../../components/NodeComponent';
import { useRouteContext } from '../../ParamsProvider';
import { Typography } from '@mui/material';

export default function FileSystemNavigator() {
  const { bookmarks } = useBookmarksContext();
  const { readPath } = useRouteContext();
  return (
    <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
      <Typography>{readPath}</Typography>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {bookmarks.map((b, i) => <NodeComponent node={b} />)}
      </TreeView>
    </Box>
  );
}