import React from 'react';
import { Menu } from '@arco-design/web-react';

import HomeIcon from 'Icon/home.svg';
import BoxIcon from 'Icon/box.svg';
import TransIcon from 'Icon/trans.svg';
import CollectionIcon from 'Icon/collection.svg';

import './sidemenu.css';

const MenuItem = Menu.Item;

const SideMenu = () => {
  return (
    <Menu
      defaultSelectedKeys={['2']}
      className="sidemenu"
    >
      <MenuItem key='1' className="menu-item">
        <HomeIcon className="icon" />
        <span className="title">Home</span>
      </MenuItem>
      <MenuItem key='2' className="menu-item">
        <BoxIcon className="icon" />
        <span className="title">Box</span>
      </MenuItem>
      <MenuItem key='3' className="menu-item">
        <TransIcon className="icon" />
        <span className="title">Transaction</span>
      </MenuItem>
      <MenuItem key='4' className="menu-item">
        <CollectionIcon className="icon" />
        <span className="title">Event</span>
      </MenuItem>
      
    </Menu>
  );
}

export default SideMenu;
