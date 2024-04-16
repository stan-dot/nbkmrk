import Node from '../classes/Node'
import { Box } from '@mui/material'
import ContextMenu from './ContextMenu'
import DraggableDialog from './DraggableDialog'
import { useBookmarksContext } from '../BookmarksProvider'
import DeleteDialog from './DeleteDialog'
import { TreeItem } from '@mui/x-tree-view/TreeItem'
import { useEffect, useState } from 'react'
import { MockBookmarkTreeNode } from '../classes/mockdata'
import { useRouteContext } from '../ParamsProvider'

function NodeComponent({ node }: { node: Node }) {
  const { deleteBookmark } = useBookmarksContext();
  const { readPath, setReadPath } = useRouteContext();
  const [loadingChildren, setLoadingChildren] = useState(false);
  const [children, setChildren] = useState<MockBookmarkTreeNode[]>([])

  useEffect(() => {
    node.getChildren().then(c => {
      setChildren(c);
    });
  }, [loadingChildren])

  return (
    <TreeItem nodeId={node.object.id} label={node.object.title}
      onDoubleClick={() => {
        const t = node.object.title
        if (readPath.includes(t)) {
          window.alert('here change the path')
          setReadPath(t)
        }
      }}
      onMouseOver={() => {
        setLoadingChildren(true);
      }}
    >
      <Box>{node.object.title}</Box>
      <ContextMenu />
      <DraggableDialog />
      <DeleteDialog callback={() => deleteBookmark(node.object.id, () => window.alert('ready'))} />
      {children.length !== 0 && <>
        {children.map((c, i) => {
          const n = new Node(c);
          return <NodeComponent node={n} />
        })}</>}
    </TreeItem >
  )
}

export default NodeComponent