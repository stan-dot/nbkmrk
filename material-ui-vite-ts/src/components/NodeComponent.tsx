import { TreeItem } from '@mui/x-tree-view/TreeItem'
import { useEffect, useState } from 'react'
import { useAppStateContext } from '../StateProvider'
import Node from '../classes/Node'
import { MockBookmarkTreeNode } from '../classes/mockdata'
import ContextMenu from './ContextMenu'

function NodeComponent({ node }: { node: Node }) {
  const [{ path }, dispatch] = useAppStateContext();
  const [loadingChildren, setLoadingChildren] = useState(false);
  const [children, setChildren] = useState<MockBookmarkTreeNode[]>([])

  useEffect(() => {
    node.getChildren().then(c => {
      // todo make sure this early thing works
      setChildren(c);
    });
  }, [loadingChildren])

  const folderChildren = children.filter(c => !!!c.url)
  return (
    <ContextMenu node={node}>
      <TreeItem nodeId={node.object.id} label={node.object.title}
        onDoubleClick={() => {
          dispatch({ type: "SET_PATH", payload: node })
        }}
        onMouseOver={() => {
          setLoadingChildren(true);
        }}
      >
        {folderChildren.length !== 0 && <>
          {folderChildren.map((c, i) => {
            const n = new Node(c);
            return <NodeComponent node={n} />
          })}</>}
      </TreeItem >
    </ContextMenu >
  )
}

export default NodeComponent