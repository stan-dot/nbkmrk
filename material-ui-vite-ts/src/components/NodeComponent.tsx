
import React from 'react'
import Node from '../classes/Node'
import { Box } from '@mui/material'

function NodeComponent({ node }: { node: Node }) {
  return (
    <div>
      <Box>{node.object.title}</Box>
    </div>
  )
}

export default NodeComponent
