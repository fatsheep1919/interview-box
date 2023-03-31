import React from 'react';
import "@arco-design/web-react/dist/css/arco.css";

import Layout from './layout';
import BoxGrid from './component/box/grid/BoxGrid';

const App = () => {
  return (
    <Layout className="page-box-wrap">
      <BoxGrid />
    </Layout>
  );
}

export default App;
