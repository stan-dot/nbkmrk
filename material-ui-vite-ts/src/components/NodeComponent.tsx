
import React from 'react'
import Node from '../classes/Node'
import { Box } from '@mui/material'
import ContextMenu from './ContextMenu'
import DraggableDialog from './DraggableDialog'
import { useBookmarksContext } from '../BookmarksProvider'
import DeleteDialog from './DeleteDialog'

function NodeComponent({ node }: { node: Node }) {
  const { addBookmark, deleteBookmark } = useBookmarksContext();
  return (
    <div onDoubleClick={() => {
      window.alert('here change the path')
    }}>
      <Box>{node.object.title}</Box>
      <ContextMenu />
      <DraggableDialog />
      <DeleteDialog callback={() => deleteBookmark(node.object.id)} />
    </div>
  )
}

export default NodeComponent