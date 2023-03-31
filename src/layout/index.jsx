import React from 'react';
import { IconThunderbolt } from '@arco-design/web-react/icon';

import SideMenu from '../component/sidemenu';
import Setting from '../component/setting';
import Search from '../component/search';

import './layout.css';

const Layout = (props) => {
  const { className, children } = props;
  return (
    <div className={`page ${className}`}>
      <div className="side">
        <div className="side-banner">
          <div className="icon-wrap">
            <IconThunderbolt className="icon" />
          </div>
          <div className="title">Jirika</div>
        </div>
        <div className="side-menu">
          <SideMenu />
        </div>
        <div className="side-bottom">
          <Setting />
        </div>
      </div>
      <div className="main">
        <div className="head">
          <Search />
        </div>
        <div className="content">
          { children }
        </div>
      </div>
    </div>
  );
}

export default Layout;
