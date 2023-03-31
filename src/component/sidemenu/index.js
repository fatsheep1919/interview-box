import React from 'react';
import { Menu } from '@arco-design/web-react';
import {
  IconHome,
  IconSubscribe,
  IconFormula,
  IconCalendar,
} from '@arco-design/web-react/icon';

import './sidemenu.css';

const MenuItem = Menu.Item;

const SideMenu = () => {
  return (
    <Menu
      defaultSelectedKeys={['2']}
      className="sidemenu"
    >
      <MenuItem key='1' className="menu-item">
        <IconHome className="icon" />
        <span className="title">Home</span>
      </MenuItem>
      <MenuItem key='2' className="menu-item">
        <IconSubscribe className="icon" />
        <span className="title">Box</span>
      </MenuItem>
      <MenuItem key='3' className="menu-item">
        <IconFormula className="icon" />
        <span className="title">Transaction</span>
      </MenuItem>
      <MenuItem key='4' className="menu-item">
        <IconCalendar className="icon" />
        <span className="title">Event</span>
      </MenuItem>
      
    </Menu>
  );
}

export default SideMenu;
