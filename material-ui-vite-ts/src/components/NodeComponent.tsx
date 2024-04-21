import Node from '../classes/Node'
import { Box } from '@mui/material'
import ContextMenu from './ContextMenu'
import DraggableDialog from './DraggableDialog'
import { useBookmarksContext } from '../BookmarksProvider'
import DeleteDialog from './DeleteDialog'
import { TreeItem } from '@mui/x-tree-view/TreeItem'
import { useEffect, useState } from 'react'
import { MockBookmarkTreeNode } from '../classes/mockdata'
import { useAppStateContext } from '../StateProvider'

function NodeComponent({ node }: { node: Node }) {
  const [{ path }, dispatch] = useAppStateContext();
  const { deleteBookmark } = useBookmarksContext();
  const [loadingChildren, setLoadingChildren] = useState(false);
  const [children, setChildren] = useState<MockBookmarkTreeNode[]>([])

  useEffect(() => {
    node.getChildren().then(c => {
      setChildren(c);
    });
  }, [loadingChildren])

  return (
    <ContextMenu>
      <TreeItem nodeId={node.object.id} label={node.object.title}
        onDoubleClick={() => {
          const t = node.object.title
          if (path.includes(t)) {
            dispatch({ type: "SET_PATH", payload: t })
          }
        }}
        onMouseOver={() => {
          setLoadingChildren(true);
        }}
      >
        <Box>{node.object.title}</Box>
        <DraggableDialog />
        <DeleteDialog callback={() => deleteBookmark(node.object.id, () => window.alert('ready'))} />
        {children.length !== 0 && <>
          {children.map((c, i) => {
            const n = new Node(c);
            return <NodeComponent node={n} />
          })}</>}
      </TreeItem >
    </ContextMenu >
  )
}

export default NodeComponent