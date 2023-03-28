import React from 'react';
import Home from '../Home/Home';
import Sidebar from '../Sidebar/Sidebar';

import './Layout.scss';

function Layout() {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        <Home />
        <span className="tags bottom-tags">&lt;/body&gt;</span>
        <br />

        <span className="bottom-tag-html">&lt;/html&gt;</span>
      </div>
    </div>
  );
}

export default Layout;
