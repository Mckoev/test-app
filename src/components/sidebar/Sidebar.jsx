import React from 'react'
import './Sidebar.css'
import BlockIcons from './BlockIcons'
import { IconsUpper } from './icons/IconsUpper'
import { IconsDown } from './icons/IconsDown'

function Sidebar({ icons }) {
  return (
    <div className="sidebar">
      <BlockIcons icons={IconsUpper} />
      <BlockIcons icons={IconsDown} />
    </div>
  )
}

export default Sidebar
