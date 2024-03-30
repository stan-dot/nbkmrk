
import React from 'react'
import Node from '../classes/Node'
import { Box } from '@mui/material'
import ContextMenu from './ContextMenu'
import DraggableDialog from './DraggableDialog'
import { useBookmarksContext } from '../BookmarksProvider'

function NodeComponent({ node }: { node: Node }) {
  const {addBookmark, deleteBookmark } = useBookmarksContext();
  return (
    <div>
      <Box>{node.object.title}</Box>
      <ContextMenu />
      <DraggableDialog />
    </div>
  )
}

export default NodeComponent
